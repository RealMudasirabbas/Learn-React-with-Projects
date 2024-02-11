import { useEffect, useState } from "react"
import { TodoProvider} from "./contexts/todosContext"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"




function App() {

const [todos,setTodos] = useState([])

// addTodo functionality
const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(),...todo},...prev])
}


// updateTodo functionality
const updateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) => prevTodos.map((todo) => {
        return todo.id === id ? updatedTodo : todo;
    }));
};


// deleteTodo functionality

const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => {
        prevTodo.id !== id }) )
}

// toggleComplete functionality

const toggleComplete = (id) => { 
    setTodos((prev) => prev.map((toggleTodo) => (
        toggleTodo.id === id ? {...toggleTodo ,completed: !toggleTodo.completed} : toggleTodo 
    ))) 
}

useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
        setTodos(todos)
    }
},[])

useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
},[todos])


    return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <div key={todo.id} className="w-full">
                                <TodoItem  todo={todo}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
)
}

export default App
