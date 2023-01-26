import React from "react"
import Logo from '../images/airbnb-logo.svg'

export default function Header() {
    return (
        <header role='banner' id="site-header">
            <div className="container">
                <div id="main-logo">
                    <img src={ Logo } alt="AirBnB" />
                </div>
            </div>
        </header>
    )
}