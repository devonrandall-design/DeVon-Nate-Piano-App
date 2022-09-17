import React from 'react'

export default function WhiteKey( {keystroke} ) {

function play(keystroke) {
  keystroke.play()
}

  return <div onClick={() => play(keystroke)} className="white-key"></div>
}