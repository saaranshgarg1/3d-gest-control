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
    let targetRotationX = cube.rotation.x;
    let targetRotationY = cube.rotation.y;
    let targetScale = cube.scale.x;
    let isAutoRotating = !gestureData; // Track if we're in auto-rotation mode
    
    // Auto-rotation parameters
    const rotationSpeed = 0.005;
    const autoRotateDamping = 0.95; // Damping factor for smoother transition
    
    // Keep track of the current auto-rotation velocity
    const autoRotVelocity = { x: rotationSpeed, y: rotationSpeed };
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      if (gestureData) {
        // Gradually turn off auto-rotation
        autoRotVelocity.x *= autoRotateDamping;
        autoRotVelocity.y *= autoRotateDamping;
        
        // Apply hand gesture data
        if (gestureData.isPinching) {
          // Zoom with pinch - with improved dampening
          targetScale = Math.max(0.5, Math.min(2.5, gestureData.pinchScale * targetScale));
        } else {
          // Rotate with hand - smoother rotation
          targetRotationX += gestureData.rotation.x * 0.05; 
          targetRotationY += gestureData.rotation.y * 0.05;
        }
        
        isAutoRotating = false;
      } else if (!isAutoRotating) {
        // Transition to auto-rotation smoothly
        autoRotVelocity.x = (autoRotVelocity.x * 0.95) + (rotationSpeed * 0.05);
        autoRotVelocity.y = (autoRotVelocity.y * 0.95) + (rotationSpeed * 0.05);
        isAutoRotating = autoRotVelocity.x > rotationSpeed * 0.9;
      } else {
        // Full auto-rotation
        targetRotationX += autoRotVelocity.x;
        targetRotationY += autoRotVelocity.y;
      }
      
      // Smooth transition to target values - adaptive smoothing
      const rotationLerpFactor = gestureData ? 0.15 : 0.05;
      cube.rotation.x += (targetRotationX - cube.rotation.x) * rotationLerpFactor;
      cube.rotation.y += (targetRotationY - cube.rotation.y) * rotationLerpFactor;
      
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
