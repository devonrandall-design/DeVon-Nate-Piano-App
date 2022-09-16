import React from "react";
import "./style.css";
import WhiteKey from './whitekey.js'
import BlackKey from './blackkey.js'

export default function App() {

const key1 = { top: 149, left: 490,} 
const key2 = { top: 149, left: 640,} 
const key3 = { top: 149, left: 790,} 



  return (
    <div className="main">
    <h1>PIANO APP</h1>
      <p>Start editing to see some magic happen :)</p>
      <div className="piano-container">
      <WhiteKey />
      <BlackKey position={key1} />
      <WhiteKey />
      <BlackKey position={key2} />
      <WhiteKey />
      <BlackKey position={key3} />
      <WhiteKey />
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