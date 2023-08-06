import React from 'react'
import DT from '../../assets/hero-dt.png'
import TB from '../../assets/hero-tb.png'

function ContentRight() {
    return (
        <div className="contentRight">
            <picture>
                <source media="(min-width: 992px)" srcset={DT} />
                <source media="(min-width: 769px)" srcset={TB} />
                <img src={DT} />
            </picture>
        </div>
    )
}

export default ContentRight