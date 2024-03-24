import React from 'react'
import Styles from './NoticeBoard.module.css'
export default function NoticeBoard() {
    return (
        <div className={Styles.MainContainer}>
            <div className={Styles.wornigIcon}>
                <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.666992 32L19.0003 0.333313L37.3337 32H0.666992ZM6.41699 28.6666H31.5837L19.0003 6.99998L6.41699 28.6666ZM19.0003 27C19.4725 27 19.8684 26.8403 20.1878 26.5208C20.5073 26.2014 20.667 25.8055 20.667 25.3333C20.667 24.8611 20.5073 24.4653 20.1878 24.1458C19.8684 23.8264 19.4725 23.6666 19.0003 23.6666C18.5281 23.6666 18.1323 23.8264 17.8128 24.1458C17.4934 24.4653 17.3337 24.8611 17.3337 25.3333C17.3337 25.8055 17.4934 26.2014 17.8128 26.5208C18.1323 26.8403 18.5281 27 19.0003 27ZM17.3337 22H20.667V13.6666H17.3337V22Z" fill="#FF6767" />
                </svg>
            </div>
            <div className={Styles.paymentreminder}>
                <strong>Payment reminder</strong>
                <p>Widget is blocked. You need to pay!</p>
            </div>
            <div className={Styles.paymentBtn}>
                <button>Pay now</button>
            </div>
        </div>
    )
}
