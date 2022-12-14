import React, {useState} from "react";
import "./style.css";
import WhiteKey from './whitekey.js'
import BlackKey from './blackkey.js'

export default function App() {

const key1 = { top: 120, left: 650,} 
const key2 = { top: 120, left: 800,} 
const key3 = { top: 120, left: 950,} 

let audios = { 
  Audio1: new Audio('https://ia600106.us.archive.org/13/items/24-piano-keys/key13.mp3'),
  Audio2: new Audio('https://ia600106.us.archive.org/13/items/24-piano-keys/key14.mp3'),
  Audio3: new Audio('https://ia600106.us.archive.org/13/items/24-piano-keys/key15.mp3'),
  Audio4: new Audio('https://ia600106.us.archive.org/13/items/24-piano-keys/key16.mp3'),
  Audio5: new Audio('https://ia600106.us.archive.org/13/items/24-piano-keys/key22.mp3'),
  Audio6: new Audio('https://ia600106.us.archive.org/13/items/24-piano-keys/key23.mp3'),
  Audio7: new Audio('https://ia600106.us.archive.org/13/items/24-piano-keys/key24.mp3'),
}






  return (
    <div className="main">
    <h1>PIANO APP</h1>
      <p>Press a Button</p>
      <div className="piano-container">
      <WhiteKey keystroke={audios.Audio1}/>
      <BlackKey keystroke={audios.Audio5} position={key1} />
      <WhiteKey keystroke={audios.Audio2} />
      <BlackKey keystroke={audios.Audio6} position={key2} />
      <WhiteKey keystroke={audios.Audio3} />
      <BlackKey keystroke={audios.Audio7} position={key3} />
      <WhiteKey keystroke={audios.Audio4} />
      </div>
      <button className="record"><div className="circle"></div> Record </button>
    </div>
  );
}

// A-
// B -
// C 
// D -
// F
// F -
// G