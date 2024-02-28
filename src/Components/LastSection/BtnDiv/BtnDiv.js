import React from 'react'
import './BtnDiv.css'
import Button from '../../Buttons/Button'
import { buttonJson } from "../../Buttons/ButtonJson/button";


export default function BtnDiv() {
    return (
        <div className="BtnDiv_main">
            {buttonJson.map((item, index) => (
                <Button key={index} img={item.img} title={item.title} bcColor={item.bcColor} />
            ))}
            {buttonJson.map((item, index) => (
                <Button key={index} img={item.img} title={item.title} bcColor={item.bcColor} />
            ))}
            {buttonJson.map((item, index) => (
                <Button key={index} img={item.img} title={item.title} bcColor={item.bcColor} />
            ))}
        </div>
    )
}