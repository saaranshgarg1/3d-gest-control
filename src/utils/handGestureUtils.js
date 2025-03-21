/**
 * Calculates the distance between two landmarks
 */
function calculateDistance(landmark1, landmark2) {
  const dx = landmark1.x - landmark2.x;
  const dy = landmark1.y - landmark2.y;
  const dz = landmark1.z - landmark2.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * Calculates gesture data from hand landmarks
 */
export function calculateHandGestures(landmarks, handedness) {
  // Get key landmarks
  const wrist = landmarks[0];
  const thumb = landmarks[4];
  const indexFinger = landmarks[8];
  const middleFinger = landmarks[12];
  
  // Calculate pinch (thumb to index finger distance)
  const pinchDistance = calculateDistance(thumb, indexFinger);
  const isPinching = pinchDistance < 0.06; // Threshold for pinch detection
  
  // Calculate pinch scale factor (zoom)
  // When pinching, use the distance between wrist and middle finger as a scale reference
  const distToMiddle = calculateDistance(wrist, middleFinger);
  const pinchScale = isPinching ? 1 + distToMiddle * 3 : 1;
  
  // Calculate rotation based on hand position
  // Convert hand position to rotation angles
  // Adjust based on handedness (left/right)
  const handMultiplier = handedness === 'Right' ? 1 : -1;
  
  // X rotation (up/down) is based on the y-coordinate of the wrist
  // Y rotation (left/right) is based on the x-coordinate of the wrist
  const rotationX = (wrist.y - 0.5) * Math.PI * 2;
  const rotationY = (wrist.x - 0.5) * Math.PI * 2 * handMultiplier;
  
  return {
    isPinching,
    pinchScale,
    rotation: {
      x: rotationX,
      y: rotationY
    },
    handedness
  };
}
