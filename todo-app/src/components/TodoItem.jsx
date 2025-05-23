import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';


function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }
    const toggleCompleted = () => {
        //console.log(todo.id);
        toggleComplete(todo.id)
    }

    return (
        <div>
            <div
                className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#80ff8a]" : "bg-[#fa9090]"
                    }`}
            >
                <input
                    type="checkbox"
                    className="cursor-pointer"
                    checked={todo.completed}
                    onChange={toggleCompleted}
                />
                <input
                    type="text"
                    className={`border-1  w-full rounded-lg ${isTodoEditable ? "border-black px-2" : "border-transparent"
                        } ${todo.completed ? "line-through" : ""}`}
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!isTodoEditable}
                />
                {/* Edit, Save Button */}
                <button
                    className="p-2 bg-white rounded-xl cursor-pointer hover:bg-gray-400 disabled:opacity-50 w-20"
                    onClick={() => {
                        if (todo.completed) return;

                        if (isTodoEditable) {
                            editTodo();
                        } else setIsTodoEditable((prev) => !prev);
                    }}
                    disabled={todo.completed}
                >
                    {isTodoEditable ? "Save" : "Edit"}
                </button>

                {/* Delete Todo Button */}
                <button
                    className="p-2 bg-white rounded-xl cursor-pointer hover:bg-gray-400"
                    onClick={() => deleteTodo(todo.id)}
                >
                    Delete
                </button>
            </div>

            
        </div>
    );
}

export default TodoItem;