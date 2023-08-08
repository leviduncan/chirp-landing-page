import React from 'react'
import { Card } from '../Card/Card'

function Features() {

  const data = [
    {
      title: 'Analytics',
      content: 'We constantly monitor your audience as it grows &mdash; so you can Tweet when your followers are most likely to be online and ready to engage with your content.',
      img: require('../../assets/analytics.jpg')
    },
    {
      title: 'Analytics',
      content: "Chirp automatically recognizes your followers' most active times and sends you notifications if you're missing out on an opportunity.",
      img: require("../../assets/smart.jpg")
    },
    {
      title: 'Analytics',
      content: 'Quality tweets drive tons of engagement. With Chirp, you can write tweets in advanced and schedule them when your audience is most likely to read.',
      img: require("../../assets/schedule.jpg")
    },
    {
      title: 'Analytics',
      content: 'Friendly on the eyes no matter what time you write your Tweets. All colors are chosen to make sure your eyes are at ease at all times.',
      img: require("../../assets/dark.jpg")
    },
  ]

  return (
    <div className="features">
      <div className="container">
        <h2>Features that help you Tweet smarter.</h2>
        <div className="card-grid">
        {
          data.map((features, idx) => (
            <Card className="card-grid_card" key={idx}>
              <img src={features.img} alt="" />
              <h5>{features.title}</h5>
              <p>{features.content}</p>
            </Card>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Features