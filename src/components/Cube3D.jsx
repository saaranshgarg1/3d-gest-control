import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

function Cube3D({ gestureData }) {
  const containerRef = useRef(null);
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);
  const [renderer, setRenderer] = useState(null);
  const [cube, setCube] = useState(null);
  
  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create scene
    const newScene = new THREE.Scene();
    newScene.background = new THREE.Color(0x1a1a1a);
    
    // Create camera
    const newCamera = new THREE.PerspectiveCamera(
      75, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    newCamera.position.z = 5;
    
    // Create renderer
    const newRenderer = new THREE.WebGLRenderer({ antialias: true });
    newRenderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(newRenderer.domElement);
    
    // Create cube
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red
      new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green
      new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blue
      new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Yellow
      new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Magenta
      new THREE.MeshBasicMaterial({ color: 0x00ffff })  // Cyan
    ];
    const newCube = new THREE.Mesh(geometry, materials);
    newScene.add(newCube);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    newScene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    newScene.add(directionalLight);
    
    // Set state
    setScene(newScene);
    setCamera(newCamera);
    setRenderer(newRenderer);
    setCube(newCube);
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      newCamera.aspect = width / height;
      newCamera.updateProjectionMatrix();
      newRenderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Initial render
    newRenderer.render(newScene, newCamera);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(newRenderer.domElement);
      geometry.dispose();
      materials.forEach(material => material.dispose());
    };
  }, []);
  
  // Handle gesture data updates
  useEffect(() => {
    if (!cube || !scene || !camera || !renderer) return;
    
    let animationId;
    const quaternion = new THREE.Quaternion(); // Create a quaternion for smoother rotation
    let targetScale = cube.scale.x;
    let isAutoRotating = !gestureData; // Track if we're in auto-rotation mode
    
    // Auto-rotation parameters
    const rotationSpeed = 0.005;
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      if (gestureData) {
        // Apply hand gesture data
        if (gestureData.isPinching) {
          // Zoom with pinch - with improved dampening
          targetScale = Math.max(0.5, Math.min(2.5, gestureData.pinchScale * targetScale));
        } else {
          // Use quaternion for rotation - similar to your example
          const rotX = gestureData.rotation.x/30 ; 
          const rotY = gestureData.rotation.y/30 ;
          const rotZ = 0; // You can use a z rotation if you have that data
          
          // Create a quaternion from Euler angles and apply it to the current rotation
          quaternion.setFromEuler(new THREE.Euler(rotX, rotY, rotZ));
          cube.quaternion.multiplyQuaternions(quaternion, cube.quaternion);
        }
        
        isAutoRotating = false;
      } else if (isAutoRotating) {
        // Auto-rotation using quaternions
        quaternion.setFromEuler(new THREE.Euler(rotationSpeed, rotationSpeed, 0));
        cube.quaternion.multiplyQuaternions(quaternion, cube.quaternion);
      } else {
        // Transition to auto-rotation
        isAutoRotating = true;
      }
      
      // Apply scale uniformly to all axes with improved smoothing
      const currentScale = cube.scale.x;
      const scaleLerpFactor = gestureData?.isPinching ? 0.2 : 0.05;
      const newScale = currentScale + (targetScale - currentScale) * scaleLerpFactor;
      
      cube.scale.set(newScale, newScale, newScale);
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [gestureData, cube, scene, camera, renderer]);
  
  return <div ref={containerRef} style={{ width: '100%', height: '100%' }}></div>;
}

export default Cube3D;
