import React, { useEffect } from 'react'
import Styles from './SignBanner.module.css'
import BannerLogo from '../../Images/BannerLogo.png'
import { useNavigate } from 'react-router'
export default function SignBanner() {
    const navigate = useNavigate();
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
                        <button onClick={()=>navigate("/beta/login")} className={Styles.LogInbutton}>Log In</button>
                        <button onClick={()=>navigate("/beta/Register")} className={Styles.Getbutton}>Get your button</button>
                    </div>
                </div>
            </div>
        </>
    )
}
