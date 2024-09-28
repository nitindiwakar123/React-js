import React from "react"
import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(0);

  // let counter = 0;

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log("Added!");

  }

  const subtractValue = () => {
    counter = counter - 1;
    setCounter(counter);
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
