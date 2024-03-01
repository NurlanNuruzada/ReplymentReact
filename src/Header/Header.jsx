import React, { useRef, useState } from 'react'
import MainLogo from '../Images/BannerLogo.png'
import Styles from './Header.module.css'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Grid,
    GridItem,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import LoginIcon from '@mui/icons-material/Login';
import { SvgIcon } from '@mui/material'
import { useEffect } from 'react'

export default function Header({ ShowButtons }) {
    const [WindowSize, SetWindowSize] = useState(getWindowSize())

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }
    useEffect(() => {
        function handleWindowResize() {
            SetWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    const isSmallScreen = WindowSize.innerWidth <= "750" ? true : false
    return (
        <Grid templateColumns='repeat(12, 1fr)'  className={Styles.MainContainer}>
            <GridItem className={Styles.Spacer} colSpan={1}></GridItem>
            <GridItem colSpan={2} className={Styles.LogoContainer}>
                <img src={MainLogo} alt="" />
                <h1>Replyment</h1>
            </GridItem>
            <GridItem className={Styles.Spacer2} ></GridItem>
            {ShowButtons && !isSmallScreen ? (
                <>
                    <GridItem colSpan={1}></GridItem>
                    <GridItem colSpan={3} className={Styles.ButtonContainer}>
                        <button className={Styles.LogInButton}>Log In</button>
                        <button className={Styles.RegisterButton}>Get your button</button>
                    </GridItem>
                    <GridItem colSpan={1}></GridItem>
                </>
            ) : null}

            {ShowButtons && isSmallScreen ? (
                <GridItem>

                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem>
                                Log In
                            </MenuItem>
                            <MenuItem>
                                Get your button
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </GridItem>
            ) : null}
        </Grid>
    )
}
