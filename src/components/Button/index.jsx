import React from 'react'

import './style.scss'

const Button = ({ content, onClick }) => {
    return (
        <button
            className='button'
            onClick={() => onClick()}
        >
            {content}
        </button>
    )
}

export default Button
