import React from 'react'
import Styles from '../Section2/LearnMoreCard.module.css'
export default function LearnMoreCard({Price,Title,Desc,ButtonInnerText}) {
    return (
        <div className={Styles.MainContainer}>
            <h1 className={Styles.PriceTitle}>{Price}</h1>
            <h1 className={Styles.MainTitle}>{Title}</h1>
            <p className={Styles.Desc}>{Desc}</p>
            <button className={Styles.Button}>{ButtonInnerText}</button>
        </div>
    )
}
