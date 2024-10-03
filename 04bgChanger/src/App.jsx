import { useState } from 'react'
function App() {

  const [color, setColor] = useState("black");

  return (
    <div className='w-full h-screen duration-150'
    style={{backgroundColor: color}}
    >
       <div className="bg-slate-200 rounded-md py-2 px-1 flex justify-between fixed bottom-12 inset-x-0 w-[70%] mx-auto overflow-x-scroll">
            <button
            onClick={() => setColor("red")} 
            className="py-2 px-4 rounded-2xl text-center shadow-lg outline-none cursor-pointer text-black" style={{backgroundColor: "red"}}
            >red</button>
            <button
            onClick={() => setColor("green")} 
            className="py-2 px-4 rounded-2xl text-center shadow-lg outline-none cursor-pointer text-black" style={{backgroundColor: "green"}}
            >green</button>
            <button 
            onClick={() => setColor("blue")}
            className="py-2 px-4 rounded-2xl text-center shadow-lg outline-none cursor-pointer text-black" style={{backgroundColor: "blue"}}
            >blue</button>
            <button 
            onClick={() => setColor("yellow")}
            className="py-2 px-4 rounded-2xl text-center shadow-lg outline-none cursor-pointer text-black" style={{backgroundColor: "yellow"}}
            >yellow</button>
            <button
            onClick={() => setColor("orange")} 
            className=" py-2 px-4 rounded-2xl text-center shadow-lg outline-none cursor-pointer text-black" style={{backgroundColor: "orange"}}
            >orange</button>
            <button 
            onClick={() => setColor("teal")}
            className=" py-2 px-4 rounded-2xl text-center shadow-lg outline-none cursor-pointer text-black" style={{backgroundColor: "teal"}}
            >teal</button>
            <button 
            onClick={() => setColor("purple")}
            className=" py-2 px-4 rounded-2xl text-center shadow-lg outline-none cursor-pointer text-black" style={{backgroundColor: "purple"}}
            >purple</button>
            <button 
            onClick={() => setColor("cyan")}
            className=" py-2 px-4 rounded-2xl text-center shadow-lg outline-none cursor-pointer text-black" style={{backgroundColor: "cyan"}}
            >cyan</button>
        </div>
    </div>
  )
}

export default App
