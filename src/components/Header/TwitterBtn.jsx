import React from 'react'
import { FaTwitter } from 'react-icons/fa';

function TwitterBtn(props) {
    const { text } = props
  return (
        <button className="btn btn-primary btn-lg py-2 px-3 full">
            <FaTwitter /> <strong>{text}</strong>
        </button>
  )
}

export default TwitterBtn