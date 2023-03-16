import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Profile from '../../components/Profile'
import { useDispatchContext, useStateContext } from '../../contexts/todo.context'

import './style.scss'

const TodoList = () => {
    const { todoList } = useStateContext()
    const dispatch = useDispatchContext()
    const navigate = useNavigate()

    const handleEditTodo = (item) => {
        dispatch({ type: 'EDIT', editItem: item })
        navigate('/to-do-form')
    }

    const handleCreateNew = () => {
        dispatch({ type: 'EDIT', editItem: null })
        navigate('/to-do-form')
    }

    return (
        <div className='todo-list'>
            <div className='left'>
                <Profile/>
            </div>
            <div className='right'>
                <div className='title'>ALL TO-DOS</div>
                <div className='list'>
                    {todoList?.map((item) =>
                        <div
                            key={item.id}
                            className='item'
                        >
                            <div
                                className='name'
                                onClick={() => handleEditTodo(item)}
                            >
                                {item.name}
                            </div>
                            <button
                                className='delete-btn'
                                onClick={() => dispatch({ type: 'DELETE', id: item.id })}
                            >
                                DEL
                            </button>
                        </div>
                    )}
                </div>
                <Button content={'Create new'} onClick={handleCreateNew}/>
            </div>
        </div>
    )
}

export default TodoList
