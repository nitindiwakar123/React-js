import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos({todo}) {

    const [isEditable, setIsEditable] = useState(false);
    const [updatedText, setUpdatedText] = useState("");
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const edit = () => {
        dispatch(updateTodo({ id: todo.id, updatedText }));
        setIsEditable(false);
    }

    return (

        <div
        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
        >
            <div className='text-white'>
                <input
                    className="bg-transparent text-white outline-none border-none"
                    type="text"
                    value={updatedText ? updatedText : todo.text}
                    onChange={(e) => setUpdatedText(e.target.value)}
                    readOnly={!isEditable}
                    ref={inputRef}
                />
            </div>
            <div className="flex justify-center items-center gap-2">
                <button
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                    onClick={() => {
                        inputRef.current.focus();
                        if (isEditable) {
                           edit();
                        }
                        else {
                            setIsEditable(true);
                        }
                    }}
                >
                    {isEditable ? <i className="fas fa-save"></i> : <i className="fas fa-edit"></i>}
                </button>
                <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                    <i className="fas fa-trash"></i>
                </button>
            </div>

        </div>

    );
}

export default Todos;