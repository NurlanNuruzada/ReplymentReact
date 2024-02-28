import React from 'react'
import './ReplymentCard.css'

const ReplymentCard = (props) => {
    return (
        <div className='ReplymentCard_main'>
                <span>FREE</span>
                <strong>{props.title}</strong>
                <p>{props.desc}</p>
                <button>Learn more</button>
        </div>
    )
}

export default ReplymentCard