import React from 'react'
import Styles from './Card.module.css'
export default function Card({ Image, Title, Desc }) {
    return (
        <div className={Styles.MainContainer}>
            <img src={Image} alt="" />
        </div>
    )
}
