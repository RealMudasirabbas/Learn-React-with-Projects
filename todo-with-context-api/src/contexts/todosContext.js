import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo Msg",
            completed: false,
        }
    ],
    addTodo: () => {},
    updateTodo: (id,updatedtodo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

export const useTodoContext = () => {
    return  useContext(todoContext)
}

export const TodoProvider = todoContext.Provider