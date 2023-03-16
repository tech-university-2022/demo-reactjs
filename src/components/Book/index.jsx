import React, { useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios'
import './style.scss'

const Book = ({ id, name, author, url, isFavorite }) => {
    const [isHeart, setIsHeart] = useState(isFavorite)
    const { response, fetch } = useAxios()

    const handleChangeFavorite = () => {
        fetch({
            method: 'patch',
            url: `/books/${id}?isLike=${!isHeart}`
        })
    }

    useEffect(() => {
        if (response !== null) {
            setIsHeart(response)
        }
    }, [response])

    return (
        <div className='book-container'>
            <div className='image'>
                <img src={url}/>
            </div>
            <div className='top'>
                <div className='name'>
                    {name}
                </div>
                <img
                    onClick={handleChangeFavorite}
                    className='heart' src={isHeart ? 'heart.png' : 'outline-heart.png'}
                />
            </div>
            <div className='text'>
                By {author}
            </div>
        </div>
    )
}

export default Book
