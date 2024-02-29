import React from 'react'
import Styles from './CustomFrom.module.css'
import { FormControl, FormHelperText, FormLabel, INpu } from '@mui/material'
import { FormErrorMessage } from '@chakra-ui/react'

export default function CutomFrom({ Title, InnerText }) {
    return (
        <div className={Styles.MainContainer}>
            <form className={Styles.FormContainer} action="" method="get">
                <label for="fname">{Title}</label>
                <input placeholder={InnerText} />
            </form>
        </div>
    )
}
