import React from 'react'
import Styles from './Section3.module.css'
export default function Section3() {
  return (
    <div className={Styles.MainContainer}>
        <div className={Styles.UpContainer}>
            <h1>Why Replyment?</h1>
        </div>
        <div className={Styles.DownContainer}>
            <div className={Styles.Section1}></div>
            <div className={Styles.Section2}></div>
            <div className={Styles.Section3}></div>
            <div className={Styles.Section4}></div>
        </div>
    </div>
  )
}
