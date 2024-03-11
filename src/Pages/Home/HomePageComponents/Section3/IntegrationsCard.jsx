import React from 'react'
import Styles from './IntegrationsCard.module.css'
export default function IntegrationsCard({ icon, Title, Desc }) {
    return (
        <div className={Styles.MainContainer}>
            <div className={Styles.Up}>
                <img src={icon} className={Styles.Icon}></img>
                <h1 className={Styles.MainTitle}>{Title}</h1>
            </div>
            <div className={Styles.Down}>
                <img src={icon} style={{ opacity: "0" }} className={Styles.Icon}></img>
                <p className={Styles.Desc}>{Desc}</p>
            </div>
        </div>
    )
}
