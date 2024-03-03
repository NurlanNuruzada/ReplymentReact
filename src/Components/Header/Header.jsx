import React, { useEffect, useState } from 'react'
import Styles from './Header.module.css'
import MainLogo from '../../Images/BannerLogo.png'
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
        <div  className={Styles.MainContainer}>
            <div  className={Styles.LogoContainer}>
                <img src={MainLogo} alt="" />
                <h1>Replyment</h1>
            </div>
            {ShowButtons && !isSmallScreen ? (
                <>
                    <div className={Styles.ButtonContainer}>
                        <button className={Styles.LogInButton}>Log In</button>
                        <button className={Styles.RegisterButton}>Get your button</button>
                    </div>
                </>
            ) : null}

            {ShowButtons && isSmallScreen ? (
                <div>
                    <Menu >
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                            border={'none'}
                            color={'white'}
                            fontSize={26}
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
                </div>
            ) : null}
        </div>
    )
}