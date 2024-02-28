import React from 'react'
import Styles from './SimpleHeader.module.css'
import HeaderImage from './HeaderLogo.png'
export default function SimpleHeader() {
    return (
        <div className={Styles.Container}>
            <img src={HeaderImage} alt="" />
            <h1>Replyment</h1>
        </div>
    )
}
