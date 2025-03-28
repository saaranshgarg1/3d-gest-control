import { useState, useRef } from 'react'
import HandGestureControl from './components/HandGestureControl'
import './App.css'
import Webcam from 'react-webcam';

function App() {
  const [gestureStatus, setGestureStatus] = useState('No hands detected')
  const [downloadLink, setDownloadLink] = useState(true)
  const webcamRef = useRef(null)

  const handleGestureStatusChange = (status,loadSuccess) => {
    setGestureStatus(status)
    if (loadSuccess) {
      setDownloadLink(false)
    }
  }

  return (
    <div className="app-container">
      <h1>3D Gesture Control</h1>
      <p className="instructions">
        Use hand gestures to control the cube:<br />
        • Move your hand to rotate the cube<br />
        • Pinch (thumb and index finger) and move to zoom in/out
      </p>
      <div className="status-bar">Status: {gestureStatus}</div>
      <HandGestureControl onGestureStatusChange={handleGestureStatusChange} webcamRef={webcamRef} down={downloadLink}/>
    </div>
  )
}

export default App
