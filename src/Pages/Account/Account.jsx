import React from 'react'
import Styles from './Account.module.css'


const Account = () => {
    return (
        <div id={Styles.mainAccount}>
            <div className={Styles.AccountHeader}>
                <div className={Styles.AccountTitle}>
                    <h1>
                        Account
                    </h1>
                </div>
                <div className={Styles.AccountButtons}>
                    <button className={Styles.DeleteAccount}>Delete account</button>
                    <button className={Styles.logOutBtn}>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_983_2655" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                <rect x="0.5" y="0.5" width="19" height="19" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_983_2655)">
                                <path d="M4.45833 17.125C4.02292 17.125 3.65017 16.97 3.3401 16.6599C3.03003 16.3498 2.875 15.9771 2.875 15.5417V4.45833C2.875 4.02292 3.03003 3.65017 3.3401 3.3401C3.65017 3.03003 4.02292 2.875 4.45833 2.875H10V4.45833H4.45833V15.5417H10V17.125H4.45833ZM13.1667 13.9583L12.0781 12.8104L14.0969 10.7917H7.625V9.20833H14.0969L12.0781 7.18958L13.1667 6.04167L17.125 10L13.1667 13.9583Z" fill="#FF6767" />
                            </g>
                        </svg>
                        <span>Log out</span></button>
                </div>
            </div>
            <div className={Styles.AccountSettings}>
                <h2>Account settings</h2>
            </div>
            <div className={Styles.AccountInputs}>
                <div className={Styles.thisInput}>
                    <div className={Styles.Label}>Email</div>
                    <div className={Styles.byInput}>
                        <input value={"koliplus.com"} type="email" />
                        <div className={Styles.editEmail}>
                            <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 16H3.425L13.2 6.225L11.775 4.8L2 14.575V16ZM0 18V13.75L13.2 0.575C13.4 0.391667 13.6208 0.25 13.8625 0.15C14.1042 0.05 14.3583 0 14.625 0C14.8917 0 15.15 0.05 15.4 0.15C15.65 0.25 15.8667 0.4 16.05 0.6L17.425 2C17.625 2.18333 17.7708 2.4 17.8625 2.65C17.9542 2.9 18 3.15 18 3.4C18 3.66667 17.9542 3.92083 17.8625 4.1625C17.7708 4.40417 17.625 4.625 17.425 4.825L4.25 18H0ZM12.475 5.525L11.775 4.8L13.2 6.225L12.475 5.525Z" fill="#1C1B1F" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={Styles.thisInput}>
                    <div className={Styles.Label}>Password</div>
                    <div className={Styles.byInput}>
                        <input value={"password"} type="password" />
                        <div className={Styles.editEmail}>
                            <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 16H3.425L13.2 6.225L11.775 4.8L2 14.575V16ZM0 18V13.75L13.2 0.575C13.4 0.391667 13.6208 0.25 13.8625 0.15C14.1042 0.05 14.3583 0 14.625 0C14.8917 0 15.15 0.05 15.4 0.15C15.65 0.25 15.8667 0.4 16.05 0.6L17.425 2C17.625 2.18333 17.7708 2.4 17.8625 2.65C17.9542 2.9 18 3.15 18 3.4C18 3.66667 17.9542 3.92083 17.8625 4.1625C17.7708 4.40417 17.625 4.625 17.425 4.825L4.25 18H0ZM12.475 5.525L11.775 4.8L13.2 6.225L12.475 5.525Z" fill="#1C1B1F" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account