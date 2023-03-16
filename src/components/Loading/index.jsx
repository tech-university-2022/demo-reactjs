import React from 'react'

const Loading = ({ isLoading = false }) => {
    return (
        <div className={isLoading ? 'loading-container' : 'none'}>
            Loading...
        </div>
    )
}

export default Loading
