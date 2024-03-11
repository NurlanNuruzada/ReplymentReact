import React from 'react'
import Styles from './Integrations.module.css'
import Image from '../../Images/Integrations1.png'
import Image2 from '../../Images/Integrations2.png'
import Image3 from '../../Images/Integrations3.png'
export default function Integrations() {
    return (
        <div className={Styles.MainContainer}>
            <div className={Styles.Title}><h1>Integrations</h1></div>
            <div className={Styles.DownContainer}>
                <div className={Styles.LeftContainer}>
                    <img className={Styles.Image} src={Image} alt="" />
                    <img className={Styles.Image} src={Image3} alt="" />
                </div>
                <div className={Styles.RightContainer}>
                    <img className={Styles.Image} src={Image2} alt="" />
                </div>
            </div>
        </div>
    )
}
