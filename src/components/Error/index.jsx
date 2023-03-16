import React from 'react'
import './style.scss'

const Error = ({ message, isError = false }) => {
    return (
        <div className={isError ? 'error-container' : 'none'}>
            <img src='error.png'/>
            <div className='message'>
                {message} HELLo
            </div>
        </div>
    )
}

export default Error
