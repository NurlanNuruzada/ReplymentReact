import React, { useRef, useState } from 'react'
import MainLogo from '../Images/BannerLogo.png'
import Styles from './Header.module.css'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
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
    const isSmallScreen = WindowSize.innerWidth<="750" ? true : false
    return (

        <div className={Styles.MainContainer}>
            <div className={Styles.LogoContainer}>
                <img src={MainLogo} alt="" />
                <h1>Replyment</h1>
            </div>
            {ShowButtons && !isSmallScreen ? (
                <div className={Styles.ButtonContainer}>
                    <button className={Styles.LogInButton}>Log In</button>
                    <button className={Styles.RegisterButton}>Get your button</button>
                </div>
            ) : null}

            {isSmallScreen ? (
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
            ) : null}
        </div>
    )
}
