import React, {useState} from 'react'

export default function WhiteKey( {keystroke} ) {

const [color, setColor] = useState('#FFFFFF')
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

  return <div style={{backgroundColor: color}} onMouseDown={() => {setColor('#5fb0b7')}} onMouseUp={() => {setColor('#FFFFFF')}} onClick={() => play(keystroke)} className="white-key"></div>
}