import React from 'react'
import Header from '../Header/Header'
import HeroContent from './HeroContent'

function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <Header />
                <HeroContent />
            </div>
        </div>
    )
}

export default Hero