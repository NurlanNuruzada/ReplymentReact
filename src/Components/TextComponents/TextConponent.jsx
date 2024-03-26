import React from 'react'
import Styles from './TextConponent.module.css'
export default function TextConponent({ header, text }) {
    return (
        <div className={Styles.Main}>
            <div className={Styles.TitleConatiner}>
                <h1 className={Styles.MainTitle}>{header}:</h1>
            </div>
            <p className={Styles.text}>{text}</p>
        </div>
    )
}
