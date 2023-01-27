import React from "react"
import experiencesData from "../experiencesData"
import Star from '../images/star.svg'

export default function CardsSection() {
    const experiences = experiencesData.map(exp => {
        return <Card 
                    tag={ exp.tag } 
                    image={ exp.image } 
                    rating={ exp.rating } 
                    numberOfFeedbacks={ exp.numberOfFeedbacks } 
                    country={ exp.country } 
                    description={ exp.description } 
                    price={ exp.price } 
                /> 
    })

    return (
        <section id="cards" className="cards">
            <div className="container">
                <div className="cards-wrapper">
                    { experiences }
                </div>
            </div>
        </section>
    )
}

function Card(props) {
    return (
        <div className="card">
            <div className="card__image">
                <div className="card__image--tag">{ props.tag }</div>
                <img src={ props.image } alt="experience image" />
            </div>
            <div className="card__info">
                <div className="card__info--header">
                    <div className="rating">
                        <img src={ Star } alt="star icon" aria-hidden='true' />
                        <span className="rating__digit">{ props.rating }</span>
                        <span className="rating__numbers">({ props.numberOfFeedbacks })</span>
                    </div>
                    &nbsp;&bull;&nbsp; <span className="country">{ props.country }</span>
                </div>
                <div className="card__info--description">
                    { props.description }
                </div>
                <div className="card__info--price">
                    <strong>From <span className="price">${ props.price }</span></strong> / person
                </div>
            </div>
        </div>
    )
}