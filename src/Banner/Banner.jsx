import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Styles from './Banner.module.css'
export const Banner = () => {
    return (
        <>
            <div className={Styles.MainContainer}>
                <div className={Styles.CenterTitle}>
                    <p>Text label</p>
                </div>
                <div className={Styles.CloseIcon}>
                    <CloseIcon />
                </div>
                <div className={Styles.Space}>
                </div>
            </div>
        </>
    )
}
