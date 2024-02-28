import React from 'react'
import Styles from './MenuButton.module.css'
import { SvgIcon } from '@mui/material'

export default function MenuButton({ Title, Icon , bcColor }) {
    return (
        <div>
            <button style={{backgroundColor:[bcColor]}} className={Styles.Button}>
                <div>
                    <SvgIcon component={Icon} className={Styles.Img} />
                </div>
                <p>
                    {Title}
                </p>
            </button>
        </div>
    )
}
