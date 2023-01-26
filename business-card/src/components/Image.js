import React from 'react'
import profilePicture from '../images/profile-pic.jpg'

export default function Info() {
    return (
        <div className='card__image'>
            <img src={ profilePicture } alt="Hart Pableo sitting at a restaurant and smiling for a picture" />
        </div>
    )
}