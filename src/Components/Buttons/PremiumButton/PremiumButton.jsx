import React from 'react'
import Styles from './PremiumButton.module.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import { SvgIcon } from '@mui/material';

export default function PremiumButton() {
    return (
        <div className={Styles.MainContaier}>
            <SvgIcon component={VerifiedIcon} />
        </div>
    )
}


