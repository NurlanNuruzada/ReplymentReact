import React from 'react';
import Styles from './SignInPage.module.css';
import { Grid, GridItem } from '@chakra-ui/react';
import CustomFrom from '../../Components/CustomForm/CutomFrom'
import AppImage from '../../Images/Customize 3.png'
import AppImageSvg from '../../Images/Customize.svg'

export default function SignInPage() {
    return (
        <div className={Styles.Main}>
            <Grid className={Styles.MainContainer} templateColumns='repeat(12, 1fr)' gap={6}>
                <GridItem className={Styles.Spacer} colSpan={1}></GridItem>
                <GridItem className={Styles.LeftContainer} colSpan={4}>
                    <div className={Styles.Title}>
                        <h1 className={Styles.MainHeader}>Log in your account</h1>
                    </div>
                    <div className={Styles.InputContainer}>
                        <CustomFrom Title={"Email"} InnerText={"Enter your email adress"}></CustomFrom>
                        <CustomFrom Title={"Password"} InnerText={"Enter Password"}></CustomFrom>
                        <button className={Styles.LoginButton}>Log in</button>
                    </div>
                </GridItem>
                <GridItem className={Styles.Spacer}  colSpan={1}></GridItem>
                <GridItem  className={Styles.RightContainer} colSpan={6}>
                    <img className={Styles.Image} src={AppImage} alt="" />
                </GridItem>
            </Grid>
        </div>
    );
}
