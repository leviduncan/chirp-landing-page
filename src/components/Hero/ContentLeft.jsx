import React from 'react'
import TwitterBtn from '../Header/TwitterBtn'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';

function ContentLeft() {
  return (
    <div className="contentLeft">
        <h1>Twitter analytics taken to a whole new level.</h1>
        <p className="pe-5">
            Chirp is a suite of Twitter analytics that will help you better understand your audience, which tweets they like, and most importantly, when they are most active on Twitter.
        </p>
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center justify-content-lg-start my-4">
           <TwitterBtn text="Sign in with Twitter" /> 
           <Link to="/" className="p-3">Learn more <FaArrowRight /></Link>
        </div>
      </div>
  )
}

export default ContentLeft