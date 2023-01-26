import React from "react"
import CardImage from '../images/image.jpg'
import Star from '../images/star.svg'

export default function CardsSection() {
    return (
        <section id="cards" className="cards">
            <div className="container">
                <Card />
            </div>
        </section>
    )
}

export function Card() {
    return (
        <div className="card">
            <div className="card__image">
                <div className="card__image--tag">sold out</div>
                <img src={ CardImage } alt="experience image" />
            </div>
            <div className="card__info">
                <div className="card__info--header">
                    <div className="rating">
                        <img src={ Star } alt="star icon" aria-hidden='true' />
                        <span className="rating__digit">5.0</span>
                        <span className="rating__numbers">(6)</span>
                    </div>
                    &nbsp;&bull;&nbsp; <span className="country">USA</span>
                </div>
                <div className="card__info--description">
                    Life lessons with Katie Zaferes
                </div>
                <div className="card__info--price">
                    <strong>From <span className="price">$136</span></strong> / person
                </div>
            </div>
        </div>
    )
}