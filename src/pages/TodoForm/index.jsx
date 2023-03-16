import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Profile from '../../components/Profile'
import { useDispatchContext, useStateContext } from '../../contexts/todo.context'

import './style.scss'

const TodoForm = () => {
    const { editItem } = useStateContext()
    const dispatch = useDispatchContext()
    const navigate = useNavigate()
    const [name, setName] = useState('')

    useEffect(() => {
        setName(editItem?.name ? editItem.name : '')
    }, [editItem])

    const handleUpdateName = (value) => {
        setName(value)
    }

    const handleSubmit = () => {
        dispatch({
            type: 'SUBMIT',
            item: {
                id: editItem?.id ? editItem.id : null,
                name
            }
        })
        navigate('/to-do-list')
    }

    return (
        <div className='todo-form'>
            <div className='left'>
                <Profile/>
            </div>
            <form className='right'>
                <textarea
                    className='input'
                    placeholder='What is your task?'
                    rows={5}
                    value={name}
                    onChange={(e) => handleUpdateName(e.target.value)}
                />
                <div className='character-count'>{100 - (name.length || 0)} characters left </div>

                <div className='btn'>
                    <Button content='Submit' onClick={handleSubmit}/>
                    <Button content='Back to All To-Dos' onClick={() => navigate('/to-do-list')}/>
                </div>
            </form>
        </div>
    )
}

export default TodoForm
