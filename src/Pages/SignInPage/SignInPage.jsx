import React from 'react';
import Styles from './SignInPage.module.css';
import Header from '../../Header/Header';
import CutomizeImage from '../../Images/Customize 3.png';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Grid, GridItem } from '@chakra-ui/react';
import CustomFrom from '../../Components/CustomForm/CutomFrom'
export default function SignInPage() {
    return (
        <>

            <Grid className={Styles.MainContainer} templateColumns='repeat(12, 1fr)' gap={6}>
                <GridItem className={Styles.LeftContainer} colSpan={4} bg={"red"}>
                    <h1>Log in your account</h1>
                    <CustomFrom></CustomFrom>
                </GridItem>
                <GridItem colSpan={8}>
                    <div className={Styles.RightContainer}>Right Content</div>
                </GridItem>
            </Grid>
        </>
    );
}
