import React from 'react'
import Image from './components/Image'
import Info from './components/Info'
import Button from './components/Button'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className="card">
            <Image />
            <div className="card__info">
                <Info />
                <Button />
                <div className="card__info--inner">
                    <About />
                    <Interests />
                </div>
            </div>
            <Footer />
        </div>
    )
}