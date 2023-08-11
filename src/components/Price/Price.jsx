import React from 'react'
import { Card } from '../Card/Card'
import TwitterBtn from '../Header/TwitterBtn'
import check from '../../assets/Checkmark.svg'

function Price() {
  return (
    <div className="price">
        <div className="container">
            <h2 className="text-center">One simple price plan.</h2>
            <p className="text-center mx-4 mx-md-1">Start growing your Twitter account by analyzing your follower's patterns.</p>
            <Card
                className="my-5 d-flex flex-column "
                borderColor="#FECA73"
                bg="#FBF8F3"
                padding="30px"
            >
                <p>Monthly</p>
                <h1>$9<span>/mo</span></h1>
                <hr className="my-3" />
                <ul>
                    <li>
                        <img src={check} alt="" />
                        <p>Unlimited<sup>*</sup> scheduled tweets and threads.</p>
                    </li>
                    <li><img src={check} alt="" /><p>Schedule up to 3 weeks in advance.</p></li>
                    <li><img src={check} alt="" /><p>Real-time audience analytics tracking up to 5k followers.</p></li>
                </ul>
                <hr className="my-3" />
                <TwitterBtn text={'Start Trial with Twitter'}/>
            </Card>
        </div>
    </div>
  )
}

export default Price