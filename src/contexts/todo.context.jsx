import React, { createContext, useContext, useReducer } from 'react'
import { editItem, todoList } from '../constants/todo.constant'
import { todoReducer } from '../reducers/todo.reducer'

const DispatchContext = createContext()
const StateContext = createContext()

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, {
        todoList,
        editItem
    })

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
export const useDispatchContext = () => useContext(DispatchContext)
