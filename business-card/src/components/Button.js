import React from 'react'
import mailIcon from '../images/Icon.svg'

export default function Button() {
    return (
        <a id='cta-button' href="mailto:pableoh@gmail.com"><img className='icon' src={ mailIcon } alt="mail icon" aria-hidden="true" />Email</a>
    )
}