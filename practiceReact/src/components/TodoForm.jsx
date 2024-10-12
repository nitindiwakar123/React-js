import { useState } from "react"
import { useTodoContext } from "../contexts";

function TodoForm() {

    const [todo, setTodo] = useState("");
    const { addTodo } = useTodoContext();

    const add = (e) => {
        e.preventDefault();

        if (!todo) return;

        addTodo({ todo, completed: false });
        setTodo("");
    }

    return (
        <div className="w-full rounded">
            <form
                onSubmit={add}
                className="flex justify-start w-full items-center"
            >
                <div className="w-[80%]">

                    <input
                        type="text"
                        placeholder="Add new task"
                        className="w-full outline-none border-none bg-transparent py-2 px-2 text-sm"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                </div>
                <div className="bg-green-600 rounded py-2 px-2 w-[20%]">
                    <button type="submit">Add Task</button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;