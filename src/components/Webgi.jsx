import {useRef} from 'react'

function Webgi() {
    const canvasRef=useRef(null)
    
  return (
    <div id='webgi-canvas-container'>
      <canvas id='webgi-canvas' ref={canvasRef}>

      </canvas>
    </div>
  )
}

export default Webgi
