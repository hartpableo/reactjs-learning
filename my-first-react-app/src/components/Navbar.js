import { React } from 'react'
import Logo from '../images/logo.svg'

export default function Navbar() {
    return (
        <header id='site-header'>
            <div className='container flex'>
                <div className='logo'><a href="./"><img src={ Logo } alt="My React App" /></a></div>
                <nav>
                    <ul>
                        <li><a href="./">React Course - Project 1</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}