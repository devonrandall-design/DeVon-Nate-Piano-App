import React from 'react'

export default function BlackKey({position, keystroke}) {
  function play(keystroke) {
    keystroke.play()
  }
  
  return <div onClick={() => play(keystroke)} style={position} className="black-key"></div>
}