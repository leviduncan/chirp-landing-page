import React from 'react'

function Avatar(props) {
    const {url} = props
  return (
    <div className="avatars">
        <img src={url} />
    </div>
  )
}

export default Avatar