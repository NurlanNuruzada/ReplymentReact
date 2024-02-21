import React from 'react'
import Styles from './SignBanner.module.css'
import BannerLogo from '../../Images/BannerLogo.png'
export default function SignBanner() {
    return (
        <>
            <div className={Styles.MainContainer}>
                <div className={Styles.SeccondContainer}>
                    <div className={Styles.LeftContainer}>
                        <img alt="banner" className={Styles.BannerLogo} src={BannerLogo} />
                        <h1 className={Styles.Title}>
                            Replyment
                        </h1>
                    </div>
                    <div className={Styles.RightContainer}>
                        <button className={Styles.LogInbutton}>Log In</button>
                        <button className={Styles.Getbutton}>Get your button</button>
                    </div>
                </div>
            </div>
        </>
    )
}
