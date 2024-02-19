import React, { useEffect, useRef } from 'react';
import './LivePage.css';

function LivePage() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Request access to media devices
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then(stream => {
        // Assign the stream to the video element
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(error => {
        console.error('Error accessing media devices.', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <video ref={videoRef} autoPlay muted className="video" />
      </header>
    </div>
  );
}

export default LivePage;
