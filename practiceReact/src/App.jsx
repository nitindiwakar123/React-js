import { useState } from 'react';
import './App.css'

function App() {
  
  // let [interval, changeInterval] = useState();
  let interval;

  function random() {
    return Math.floor((Math.random() * 255) + 1);
  }

  function changeBackground() {
    
    interval = setInterval(() => {
    document.body.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
    }, 1000);
    // changeInterval(interval);
  }

  function stopBackground() {
    clearInterval(interval);
    // changeInterval(interval);
  }

  return (
    <> 
    <button onClick={changeBackground}>Start</button>
    <button onClick={stopBackground}>Stop</button>
    </>
  )
}

export default App
