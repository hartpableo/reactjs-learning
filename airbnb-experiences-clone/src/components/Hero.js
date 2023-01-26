import React from "react"
import HeroImages from '../images/hero-images.jpg'

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="container">
                <div className="hero__image">
                    <img src={ HeroImages } alt="grid display of different experience photos" />
                </div>
                <div className="hero__content">
                    <h1 id="page-heading">Online Experiences</h1>
                    <div className="hero__content--inner">
                        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}