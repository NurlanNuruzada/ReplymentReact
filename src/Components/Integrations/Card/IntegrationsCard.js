import React from 'react'
import './IntegrationsCard.css'
import img from "../integration_instructions.png";

const IntegrationsCard = (props) => {
    return (
        <div className='IntegrationsCard_main'>
            <div className='IntegrationsCardName'>
                <div className='IntegrateIcon'>
                    <img src={props.img} />
                </div>
                <div className='IntegrateText'>{props.title}</div>
            </div>
            <div className='IntegrateDetails'>{props.desc}</div>
        </div>
    )
}

export default IntegrationsCard