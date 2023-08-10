import React from 'react'
import { Card } from '../Card/Card'
import twitblu from '../../assets/twit-blu.svg'
import Counter from '../Counter/Counter'
import RandomDate from '../Date/RandomDate'


function Testimonials() {

    const data = [
        {
            name: "Sara May",
            tag: "@sara_may",
            say: "I just tried out @chirp and it's amazing, love all the analytics I can see.",
            date: "January 10, 2023",
            img: require("../../assets/sara.png")
        },
        {
            name: "Jack Scott",
            tag: "@jackscott_",
            say: "I initially started using Chirp to support the co-founder as I personally knew him, but after having tried it out for a few weeks, I can genuinely say this changed my Twitter game.",
            date: "March 2, 2023",
            img: require("../../assets/jack.png")
        },
        {
            name: "Jessica Matthews",
            tag: "@jmatt98",
            say: "Asolutely love everything about Chirp, from the design to how everything works smoothly.",
            date: "April 23, 2023",
            img: require("../../assets/jessica.png")
        },
    ]

    return (
        <div className="testimonials">
            <div className="container">
                <h2>What our customers say</h2>
                <div className="card-grid d-flex gap-3 my-4">
                    {
                        data.map((features, idx) => (
                            <Card 
                            className="card-grid_card" 
                            key={idx}
                            borderColor={'white'}
                            >
                                <div className="d-flex justify-content-between align-items-center py-2">
                                <div className="d-flex align-items-center">
                                    <img src={features.img} alt={features.name} className="face p-1"/>
                                    <div>
                                    <p className="title"><strong>{features.name}</strong></p>
                                    <p className="tag">{features.tag}</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={twitblu} alt="Twitter Blue Logo" />
                                </div>
                                </div>
                                <p className="d-flex flex-1">{features.say}</p>
                                <div className="d-flex justify-content-between py-3">
                                    <Counter />
                                    <RandomDate />
                                </div>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Testimonials