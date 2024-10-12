import { useRef, useState } from "react";
import { useTodoContext } from "../contexts";

function TodoItem({ todo }) {

    const [isEditable, setIsEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { updateTodo, removeTodo, toggleComplete } = useTodoContext();
    const inputRef = useRef(null);

    const edit = () => {

        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsEditable(false);
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    }

    return (
        <div className="bg-gray-600 rounded px-2 flex items-center gap-2">
            <div className="flex justify-center items-center">
                <input type="checkbox"
                    name="completeCheck"
                    checked={todo.completed}
                    onChange={toggleCompleted}
                />
            </div>
            <div className="w-[80%]">
                <input
                    type="text"
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!isEditable}
                    className={`w-full py-2 px-1 outline-none bg-transparent ${todo.completed ? "line-through" : ""}`}
                    ref={inputRef}
                />
            </div>
            <div className="flex justify-center items-center gap-3 px-1">
                <button
                    onClick={(e) => {

                        if (todo.completed) return;
                        inputRef.current.focus();
                        if (isEditable) {
                            edit();
                        }
                        else {
                            setIsEditable((prev) => !prev);
                        }
                    }}
                    disabled={todo.completed}
                >
                    {isEditable ? <i className="fas fa-save"></i> : <i className="fas fa-edit"></i>}
                </button>
                <button onClick={() => removeTodo(todo.id)}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default TodoItem;