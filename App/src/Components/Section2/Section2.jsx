import React from 'react'
import Styles from './Section2.module.css'
import AudienceImage from '../../Images/Frame 6122.png'
import ButtonsImage from '../../Images/Frame 6123.png'

export default function Section2() {
    return (
        <div>
            <div className={Styles.MainContainer}>
                <div className={Styles.LeftContainer}>
                    <h1 className={Styles.Title}>
                        <span className={Styles.GradientText}>Engage</span>  with your website visitors using messaging applications.
                    </h1>
                    <h1 className={Styles.Desctiption}>
                        Customize the chat widget to match your brand's colors and style.
                        Additionally, set up a welcome message or
                        chatbot to greet visitors and guide them to the right information.
                    </h1>
                    <button className={Styles.Getbutton}>Get your free button</button>
                </div>
                <div className={Styles.RightContainer}>
                    <div className={Styles.LeftSection}>
                        <img className={Styles.Image} src={AudienceImage} alt="" />
                    </div>
                    <div className={Styles.RightSection}>
                        <img className={Styles.Image} src={ButtonsImage} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
