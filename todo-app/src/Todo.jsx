import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'


function Todo() {
    const [todos, setTodos] = useState([])


    const addTodo = (todo) => {
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
    }

    const updateTodo = (id, todo) => {
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    }

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    const toggleComplete = (id) => {
        //console.log(id);
        setTodos((prev) =>
            prev.map((prevTodo) =>
                prevTodo.id === id ? {
                    ...prevTodo,
                    completed: !prevTodo.completed
                } : prevTodo))
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"))

        if (todos && todos.length > 0) {
            setTodos(todos)
        }
    }, [])

    // Save todos to local storage whenever the todos state changes
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])




    return (
        <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
            <div className="bg-purple-300 min-h-screen min-w-full py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg border border-white bg-purple-500 px-4 py-3">
                    <h1 className="text-4xl text-white font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                            todos.filter(todo => !todo.completed).map((todo) => (
                                <div key={todo.id}
                                    className='w-full'>
                                    <TodoItem todo={todo} />
                                </div>
                            ))
                        }
                    </div>

                    <div className='mt-3'>
                        <h2 className='text-xl text-white font-semibold'>Completed: {todos.filter(todo => todo.completed).length}</h2>
                        <div className="flex mt-3 flex-wrap gap-y-3">
                            {
                                todos.filter(todo => todo.completed).map((todo) => (
                                    <div key={todo.id}
                                        className='w-full'>
                                        <TodoItem todo={todo} />
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </TodoProvider>
    )
}

export default Todo