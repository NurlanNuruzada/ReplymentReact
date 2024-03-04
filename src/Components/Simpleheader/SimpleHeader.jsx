import React from 'react'
import HeaderImage from './HeaderLogo.png'
import Styles from './SimpleHeader.module.css'
export default function SimpleHeader() {
    return (
        <div className={Styles.Container}>
            <img src={HeaderImage} alt="" />
            <h1>Replyment</h1>
        </div>
    )
}
