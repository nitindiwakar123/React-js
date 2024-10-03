import React from "react"
import { useState } from "react";
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  // let counter = 0;

  const addValue = () => {
   
    setCounter(prevCounter => prevCounter + 1 );
    setCounter(prevCounter => prevCounter + 1 );
    setCounter(prevCounter => prevCounter + 1 );
    setCounter(prevCounter => prevCounter + 1 );
    console.log(counter);
    

  }

  const subtractValue = () => {
   
    setCounter(prevCounter => prevCounter - 1 );
    setCounter(prevCounter => prevCounter - 1 );
    setCounter(prevCounter => prevCounter - 1 );
    setCounter(prevCounter => prevCounter - 1 );
    console.log("Subtracted");

  }

  return (
    <>
      <h1>Counter Using React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
        onClick={addValue}
      >Increase {counter}</button>
      <br />
      <button
        onClick={subtractValue}
      >Decrease {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
