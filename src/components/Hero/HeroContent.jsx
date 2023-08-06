import React from 'react'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'

function HeroContent() {
  return (
    <div className='heroContent d-flex flex-column-reverse flex-lg-row mb-3'>
      <ContentLeft />
      <ContentRight />
    </div>
  )
}

export default HeroContent