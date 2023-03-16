import React, { useEffect, useState } from 'react'
import Book from '../../components/Book'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import useAxios from '../../hooks/useAxios'
// import { bookList } from '../../constants/book.constant'
import './style.scss'

const Books = () => {
    const [books, setBooks] = useState([])
    const { fetch, response, error, loading } = useAxios()

    useEffect(() => {
        fetch({
            method: 'get',
            url: '/books/all'
        })
    }, [])

    useEffect(() => {
        setBooks(response)
    }, [response])

    return (
        <div className='books-container'>
            <div className='title'>Most Popular</div>
            <div className='books'>
                {books?.map(item =>
                    <Book
                        key={item.id}
                        id={item.id}
                        url='book.jpg'
                        name={item.Name}
                        author={item.Author}
                        isFavorite={item.Is_like}
                    />
                )}
            </div>
            <Error isError={error} message={error}/>
            <Loading isLoading={loading}/>
        </div>
    )
}

export default Books
