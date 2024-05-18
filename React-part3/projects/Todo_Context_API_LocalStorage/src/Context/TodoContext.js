import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'like views',
            isCompleted: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo:(id, todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {}
})

export const TodoProvider = TodoContext.Provider

export function useTodo () {
    return useContext(TodoContext)
}