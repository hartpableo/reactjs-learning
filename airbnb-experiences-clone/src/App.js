import React from "react"
import Header from './components/Header'
import Hero from './components/Hero'
import CardsSection from "./components/Card"

export default function App() {
    return (
        <>
            <Header />
            <main role='main'>
                <Hero />
                <CardsSection />
            </main>
        </>
    )
}