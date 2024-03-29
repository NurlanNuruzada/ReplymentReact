import React from 'react'
import Styles from './LastSection.module.css'

export default function LastSection() {

    return (
        <div className={Styles.Main}>
            <div className={Styles.ItsFree}>
                <div>
                    <strong>Yes, it's free</strong>
                    <button>No credit card required</button>
                </div>
            </div>
            <div className={Styles.Customize}>
                <h2>Get started now and customize your widget to match your brand's style and tone.</h2>
                <p>Elevate your online presence and engage with your visitors in a way that reflects your unique identity.</p>
                <button>Get your free button</button>
            </div>
        </div>
    )
}

