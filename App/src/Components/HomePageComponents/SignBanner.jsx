import React from 'react'
import Styles from './SignBanner.module.css'
import BannerLogo from '../../Images/BannerLogo.png'
export default function SignBanner() {
    return (
        <>
            <div className={Styles.MainContainer}>
                <div className={Styles.SeccondContainer}>
                    <div className={Styles.LeftContainer}>
                        <img src={BannerLogo} />
                        <h1>
                            Replyment
                        </h1>
                    </div>
                    <div className={Styles.RightContainer}>
                        <button>Log In</button>
                        <button>Get your button</button>
                    </div>
                </div>
            </div>
        </>
    )
}
