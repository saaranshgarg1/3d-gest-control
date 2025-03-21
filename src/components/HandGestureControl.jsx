import { useEffect, useRef, useState } from 'react';
import { Camera } from '@mediapipe/camera_utils';
import { Hands } from '@mediapipe/hands';
import Cube3D from './Cube3D';
import { calculateHandGestures } from '../utils/handGestureUtils';

function HandGestureControl({ onGestureStatusChange }) {
  const videoRef = useRef(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [gestureData, setGestureData] = useState(null);
  
  useEffect(() => {
    // Initialize MediaPipe Hands
    const hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      }
    });
    
    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });
    
    // Handle results from hand detection
    hands.onResults((results) => {
      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        const landmarks = results.multiHandLandmarks[0];
        const handedness = results.multiHandedness[0].label;
        
        // Process landmarks to get rotation and zoom data
        const gestureInfo = calculateHandGestures(landmarks, handedness);
        setGestureData(gestureInfo);
        
        if (gestureInfo.isPinching) {
          onGestureStatusChange(`Pinching - Zoom: ${gestureInfo.pinchScale.toFixed(2)}`);
        } else {
          onGestureStatusChange(`Rotating - X: ${gestureInfo.rotation.x.toFixed(2)}, Y: ${gestureInfo.rotation.y.toFixed(2)}`);
        }
      } else {
        onGestureStatusChange('No hands detected');
        setGestureData(null);
      }
    });
    
    // Set up camera if video element is available
    if (videoRef.current) {
      const camera = new Camera(videoRef.current, {
        onFrame: async () => {
          await hands.send({ image: videoRef.current });
        },
        width: 640,
        height: 480
      });
      
      camera.start()
        .then(() => {
          setCameraReady(true);
        })
        .catch((err) => {
          console.error("Error starting camera:", err);
          onGestureStatusChange('Camera error: ' + err.message);
        });
      
      // Cleanup function
      return () => {
        camera.stop();
        hands.close();
      };
    }
  }, [onGestureStatusChange]);
  
  return (
    <div className="gesture-container">
      <div className="canvas-container">
        <Cube3D gestureData={gestureData} />
      </div>
      <div className="video-container">
        <video
          ref={videoRef}
          className="camera-feed"
          playsInline
        ></video>
        {!cameraReady && (
          <div className="camera-loading">
            Loading camera...
          </div>
        )}
      </div>
    </div>
  );
}

export default HandGestureControl;
