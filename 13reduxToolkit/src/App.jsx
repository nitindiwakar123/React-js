import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import { useSelector } from "react-redux";

function App() {

  const todos = useSelector(state => state.todos);
  console.log(todos);
  

  return (
    <>
      <AddTodo />
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todos todo={todo} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default App

