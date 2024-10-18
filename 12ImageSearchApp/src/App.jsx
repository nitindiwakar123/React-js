import { useEffect, useState } from "react"
import { ApiContextProvider } from "./contexts/ApiContext"


function App() {

  const [Api, setApi] = useState({});


  return (
   <ApiContextProvider value={{Api}}>
    <div className="bg-gray-800 w-[80%] mx-auto">

    </div>
   </ApiContextProvider>
  )
}

export default App
