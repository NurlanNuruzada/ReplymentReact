import React from 'react'
import Styles from './CrudFrom.module.css'
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import { SvgIcon } from '@mui/material';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import EditIcon from '@mui/icons-material/Edit';
import PremiumButton from '../Buttons/PremiumButton/PremiumButton';

export default function CrudForm({ EdittedIcon, Title, isPremium, borderBottom }) {
    return (
        <div style={{ border: [borderBottom] }} className={Styles.MainContainer}>
            <div className={Styles.LeftConatiner}>
                <div className={Styles.IconAndName}>
                    <SvgIcon style={{ marginRight: "17px" }} component={UnfoldMoreOutlinedIcon}></SvgIcon>
                    <SvgIcon className={Styles.EditIcon} component={EdittedIcon}></SvgIcon>
                    <p>{Title}</p>
                </div>
                <form className={Styles.From} action="" >Add your link</form>
            </div>
            <div className={Styles.RigntContainer}>

                {isPremium ? <PremiumButton /> : ""}
                <div className={Styles.IconContaienr}>
                    <SvgIcon component={DeleteOutlineSharpIcon}></SvgIcon>
                </div>
                <div className={Styles.IconContaienr}>
                    <SvgIcon component={EditIcon}></SvgIcon>
                </div>

            </div>
        </div>
    )
}
