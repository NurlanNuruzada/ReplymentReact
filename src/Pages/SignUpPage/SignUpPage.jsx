import React from 'react';
import Styles from './SignUpPage.module.css'
import { Grid, GridItem } from '@chakra-ui/react';
import CustomFrom from '../../Components/CustomForm/CutomFrom'
import AppImage from '../../Images/Customize 3.png'

export default function SignUpPage() {
    return (
        <div className={Styles.Main}>
            <Grid className={Styles.MainContainer} templateColumns='repeat(12, 1fr)' gap={6}>
                <GridItem className={Styles.Spacer} colSpan={1}></GridItem>
                <GridItem className={Styles.LeftContainer} colSpan={4}>
                    <div className={Styles.Title}>
                        <h1 className={Styles.MainHeader}>Create an account</h1>
                    </div>
                    <div className={Styles.InputContainer}>
                        <CustomFrom Title={"Email"} InnerText={"Enter your email adress"}></CustomFrom>
                        <CustomFrom Title={"Password"} InnerText={"Enter Password"}></CustomFrom>
                        <button className={Styles.LoginButton}>Sing up</button>
                    </div>
                </GridItem>
                <GridItem className={Styles.Spacer}  colSpan={1}></GridItem>
                <GridItem  className={Styles.RightContainer} colSpan={6}>
                    <div  className={Styles.Effect}> </div>
                    <img className={Styles.Image} src={AppImage} alt="" />
                </GridItem>
            </Grid>
        </div>
    );
}
