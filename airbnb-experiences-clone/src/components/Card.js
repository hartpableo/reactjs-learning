import React from "react"
// import CardImage from '../images/image.jpg'
import Star from '../images/star.svg'

export default function CardsSection() {
    return (
        <section id="cards" className="cards">
            <div className="container">
                <div className="cards-wrapper">
                    <Card 
                        tag='sold out'
                        image='https://images.pexels.com/photos/10627367/pexels-photo-10627367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        rating='5.0'
                        numberOfFeedbacks='8'
                        country='Canada'
                        description='Spending time with loved ones'
                        price='32.00'
                    />
                    <Card 
                        tag='online'
                        image='https://images.pexels.com/photos/15283479/pexels-photo-15283479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        rating='4.1'
                        numberOfFeedbacks='3'
                        country='Australia'
                        description='Outdoor wedding celebrations'
                        price='99.00'
                    />
                    <Card 
                        tag='limited'
                        image='https://images.pexels.com/photos/5644294/pexels-photo-5644294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        rating='4.9'
                        numberOfFeedbacks='20'
                        country='South Korea'
                        description='Cold mornings in Seoul'
                        price='23.00'
                    />
                </div>
            </div>
        </section>
    )
}

export function Card(props) {
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