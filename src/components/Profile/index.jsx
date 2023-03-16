import React, { useEffect, useState } from 'react'

import './style.scss'

const Profile = () => {
    const [date, setDate] = useState(new Date())

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 30000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className='profile-container'>
            <div className='account'>
                <div className='image'>
                    <img src='pikachu.png'/>
                </div>
                <div className='account-name'>Hi, Nhi Mai</div>
            </div>
            <div className='clock'>
                <p>{date.getHours()}:{date.getMinutes()}{date.getHours() >= 12 ? 'PM' : 'AM'}</p>
                <p>{date.getDay()} {monthNames[date.getMonth()]}, {date.getFullYear()}</p>
            </div>
        </div>
    )
}

export default Profile
