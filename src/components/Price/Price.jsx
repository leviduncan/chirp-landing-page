import React from 'react'
import { Card } from '../Card/Card'

function Price() {
  return (
    <div className="price">
        <div className="container text-center">
            <h2 className="">One simple price plan.</h2>
            <p>Start growing your Twitter account by analyzing your follower's patterns.</p>
            <Card
                className="my-5"
                borderColor="#FECA73"
                bg="#FBF8F3"
            />
        </div>
    </div>
  )
}

export default Price