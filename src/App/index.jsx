import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Books from '../pages/Books'
import TodoForm from '../pages/TodoForm'
import TodoList from '../pages/TodoList'

const App = () => {
    return (
        <Routes>
            <Route exact path='/to-do-list' element={<TodoList/>}/>
            <Route exact path='/to-do-form' element={<TodoForm/>}/>
            <Route exact path='/books' element={<Books/>}/>
        </Routes>
    )
}

export default App
