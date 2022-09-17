import React, {useState} from 'react'

export default function WhiteKey( {keystroke} ) {

const [isClicked, setClick] = useState(false)

function play(keystroke) {

if (isClicked === false) {
  keystroke.play()
 setClick(true)

  setTimeout(() => {
    alert(isClicked)
    
    
  }, 6000)

}

if (isClicked) {
  setClick(false)
  return

}

}

  return <div onClick={() => play(keystroke)} className="white-key"></div>
}