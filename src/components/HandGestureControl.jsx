import { useEffect, useRef, useState } from 'react';
import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';
import Cube3D from './Cube3D';
import Webcam from 'react-webcam';

function calculateHandGestures(landmarks, prevThumbTip, prevIndexFingerTip) {
    // Calculate rotation and zoom based on hand landmarks
    const thumbTip = landmarks[4];
    const indexFingerTip = landmarks[8];
    // window.console.log(prevThumbTip)
    // window.console.log(prevIndexFingerTip)

    if (!prevThumbTip || !prevIndexFingerTip) {

        return {
            isPinching: true,
            pinchScale: 1.0,
            rotation: { x: 0, y: 0 },
            currentThumbTip: thumbTip,
            currentIndexFingerTip: indexFingerTip
        };
    }

    // Calculate scale for pinch-to-zoom with smoothing
    let pinchScale = 1.0;
    const prevDistance = Math.sqrt(
        (prevThumbTip.x - prevIndexFingerTip.x) ** 2 +
        (prevThumbTip.y - prevIndexFingerTip.y) ** 2 +
        (prevThumbTip.z - prevIndexFingerTip.z) ** 2
    );
    const currentDistance = Math.sqrt(
        (thumbTip.x - indexFingerTip.x) ** 2 +
        (thumbTip.y - indexFingerTip.y) ** 2 +
        (thumbTip.z - indexFingerTip.z) ** 2
    );
    pinchScale = currentDistance / prevDistance;
    var isPinching = false;
    if (pinchScale >0.5 && pinchScale < 1.5) {
        pinchScale = 0;
        isPinching = false;
    }
    else {
        if (pinchScale <=0.5) {
            pinchScale*2;
        }
        else if (pinchScale >=1.5) {
            pinchScale/1.5;
        }
        isPinching = false;
    }

    // Calculate rotation based on hand movement - more stable than previous implementation
    const rotation = {
        x: 0,
        y: 0
    };
    let x = (indexFingerTip.x - prevIndexFingerTip.x) * 27.6666667;
    let y = (indexFingerTip.y - prevIndexFingerTip.y) * 20;

    rotation.y = Math.abs(x) > 0.2 ? x : 0;
    rotation.x = Math.abs(y) > 0.2 ? y : 0;
    console.log(rotation)
    return {
        isPinching,
        pinchScale,
        rotation,
        // Return current positions to be saved for next frame
        currentThumbTip: thumbTip,
        currentIndexFingerTip: indexFingerTip
    };
}

function HandGestureControl({ onGestureStatusChange, webcamRef,down }) {
    const [gestureData, setGestureData] = useState({
        isPinching: false,
        pinchScale: 1.0,
        rotation: { x: 0, y: 0 }
    });
    const [cameraError, setCameraError] = useState(null);
    const [isMediaPipeLoading, setIsMediaPipeLoading] = useState(true);
    const prevThumbTipRef = useRef(null);
    const prevIndexFingerTipRef = useRef(null);
    const handsRef = useRef(null);
    const cameraRef = useRef(null);

    useEffect(() => {
        if (!webcamRef.current) return;

        // Cleanup function to handle component unmounting
        let isMounted = true;

        const initializeMediaPipe = async () => {
            try {
                // Initialize MediaPipe Hands
                const hands = new Hands({
                    locateFile: (file) => {
                        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1646424915/${file}`;
                    }
                });

                hands.setOptions({
                    selfieMode: true,
                    maxNumHands: 1,
                    modelComplexity: 1,
                    minDetectionConfidence: 0.5,
                    minTrackingConfidence: 0.5
                });

                // Set up results handler before attaching to camera
                hands.onResults((results) => {
                    if (!isMounted) return;
                    handleHandResults(results);
                });

                // Wait for hands model to fully load
                await hands.initialize();

                if (isMounted) {
                    handsRef.current = hands;
                    setIsMediaPipeLoading(false);

                    // After MediaPipe is loaded and initialized, setup camera
                    if (webcamRef.current && webcamRef.current.video) {
                        const camera = new Camera(webcamRef.current.video, {
                            onFrame: async () => {
                                if (!handsRef.current || !webcamRef.current?.video) return;
                                try {
                                    await handsRef.current.send({ image: webcamRef.current.video });
                                } catch (err) {
                                    console.error("Error sending frame to MediaPipe:", err);
                                }
                            },
                            width: 640,
                            height: 480
                        });
                        cameraRef.current = camera;
                        camera.start();
                    }
                }
            } catch (error) {
                console.error("Error initializing MediaPipe:", error);
                if (isMounted) {
                    setCameraError("Failed to initialize hand detection. Please refresh the page.");
                    setIsMediaPipeLoading(false);
                }
            }
        };

        // Start initialization once webcam is ready
        const checkWebcamReady = setInterval(() => {
            if (webcamRef.current && webcamRef.current.video && webcamRef.current.video.readyState === 4) {
                clearInterval(checkWebcamReady);
                if (down) initializeMediaPipe();
            }
        }, 100);

        return () => {
            isMounted = false;
            clearInterval(checkWebcamReady);
            if (cameraRef.current) {
                cameraRef.current.stop();
            }
            if (handsRef.current) {
                handsRef.current.close();
            }
        };
    }, [webcamRef]);

    const handleHandResults = (results) => {
        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
            // Process detected hand
            const landmarks = results.multiHandLandmarks[0];

            const gestures = calculateHandGestures(
                landmarks,
                prevThumbTipRef.current,
                prevIndexFingerTipRef.current
            );

            setGestureData({
                isPinching: gestures.isPinching,
                pinchScale: gestures.pinchScale,
                rotation: gestures.rotation
            });
            //window.console.log(gestures)

            // Update refs for next frame
            prevThumbTipRef.current = gestures.currentThumbTip;
            prevIndexFingerTipRef.current = gestures.currentIndexFingerTip;

            // Update status message
            onGestureStatusChange(gestures.isPinching ? 'Pinching - Zoom' : 'Hand detected - Rotate', false);
        } else {
            // No hands detected
            onGestureStatusChange('No hands detected', false);
            prevThumbTipRef.current = null;
            prevIndexFingerTipRef.current = null;
        }
    };

    return (
        <div className="gesture-container">
            <div className="canvas-container">
                <Cube3D gestureData={gestureData} />
            </div>
            <div className="video-container">
                <Webcam
                    ref={webcamRef}
                    className="camera-feed"
                    playsInline
                    style={{
                        transform: 'scaleX(-1)',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
                {isMediaPipeLoading && (
                    <div className="loading-overlay">
                        <p>Loading hand tracking system...</p>
                    </div>
                )}
                {cameraError && (
                    <div className="camera-error">
                        Error: {cameraError}
                        <p>Please ensure camera permissions are granted and try again.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HandGestureControl;
