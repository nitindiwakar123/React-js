import Child1 from "./components/Child1"
import Parent from "./components/Parent"
import UserContextProvider from "./contexts/userContextProvider"


function App() {

  return (
  <UserContextProvider>
    <Parent />
    <Child1 />
  </UserContextProvider>
    )
}

export default App
