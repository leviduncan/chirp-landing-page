import React, { useState } from 'react'
import fav from '../../assets/Like.svg'

function Counter() {
    const [counters, setCounters] = useState([{ value: 0 }])

    const increment = (index) => {
        const updatedCounters = [...counters]
        updatedCounters[index].value += 1
        setCounters(updatedCounters)
    }

  return (
    <>
        {counters.map((counter, index) => (
            <div key={index}>
                <img src={fav} alt="" onClick={() => increment(index)}/> {counter.value}
            </div>
        ))}
    </>
  )
}

export default Counter