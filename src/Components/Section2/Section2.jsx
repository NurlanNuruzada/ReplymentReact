import React from 'react'
import Styles from './Section2.module.css'
import AudienceImage from '../../Images/Frame 6122.png'
import ButtonsImage from '../../Images/Frame 6123.png'
import warning from "./warning.png";
import Screen from "./Screen.png";

export default function Section2() {
    return (
        <div className={Styles.Main}>
            <div className={Styles.MainContainer}>
                <div className={Styles.BetaVersion}>
                    <div>
                        <img src={warning} alt="" /><span style={{ marginLeft: '10px' }}>This is a beta version!</span>
                    </div>
                </div>
                <div className={Styles.Engage}>
                    <div className={Styles.EngageLeft}>
                        <h1>Engage with your website visitors using messaging applications.</h1>
                        <p>Customize the chat widget to match your brand's colors and style. Additionally, set up a welcome message or chatbot to greet visitors and guide them to the right information.</p>
                        <button className={Styles.Getbutton}>Get your free button</button>
                    </div>
                </div>
                <div id={Styles.sectionOneHomePageResponsive}></div>
            </div>
        </div>
    )
}
