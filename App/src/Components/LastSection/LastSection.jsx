import React from 'react'
import Styles from './LastSection.module.css'
import FreeButton from './FreeButton'
export default function LastSection() {

    return (
        <div className={Styles.Main}>
            <h1>Yes, it's free</h1>
            <FreeButton />
        </div>
    )
}
