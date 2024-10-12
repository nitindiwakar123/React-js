import { useEffect, useState } from "react"
import { TodoProvider } from "./contexts"
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((currTodo) => currTodo.id === id ? todo : currTodo));
  }
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((currTodo) => currTodo.id !== id));
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((currTodo) => currTodo.id === id ? { ...currTodo, completed: !currTodo.completed } : currTodo));
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  console.log("Todos", todos);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, removeTodo, toggleComplete }}>
      <div className="w-[80%] md:w-[40%] mx-auto bg-gray-800 flex flex-col justify-center items-center gap-2 my-20 px-5 py-10">
        <div className="bg-gray-600 rounded w-full">
          <TodoForm />
          {/* TodoForm */}
        </div>
        <div className="w-full flex flex-col gap-2">
          {todos.map((todo) => (
            <div key={todo.id} className="w-full ">
              <TodoItem todo={todo} />
            </div>
          ))}
          {/* TodoItem */}
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
