import React, {useState} from 'react'

export default function BlackKey({position, keystroke}) {

  const [smallcolor, setSmallColor] = useState('#000000')


  let isClicked = false


  function play(keystroke) {


    if (isClicked === false) {
      keystroke.play()
     isClicked = true
    
     setTimeout(() => {
    isClicked = false
     }, 6000)
    }
    
    if (isClicked === true) {
      keystroke.currentTime = 0;
      keystroke.play()
    }
    
  }
  
  return <div style={{backgroundColor: smallcolor}} onMouseDown={() => setSmallColor('#41337a')}   onMouseUp={() => {setSmallColor('#000000')}} onClick={() => play(keystroke)} style={position} className="black-key"></div>
}