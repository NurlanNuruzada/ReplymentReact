import React, { useEffect, useState } from 'react';
import Styles from './Header.module.css';
import MainLogo from '../../Images/BannerLogo.png';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Button,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom'; // Changed import from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../Redux/Slices/AuthSlice';

export default function Header({ MenuItems, ShowBurgerMenu, ShowButtons, Position, TitleColor, Border, Height, Padding }) {
    const [WindowSize, setWindowSize] = useState(getWindowSize());
    const [DisplayPosition, setDisplayPosition] = useState(Position);
    const dispach = useDispatch()
    const navigate = useNavigate();
    const { email } = useSelector((state) => state.auth);

    const handleNavigate = (link) => () => {
        navigate(link);
    };

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const isSmallScreen = WindowSize.innerWidth <= 1051;

    return (
        <div style={{ position: DisplayPosition, border: Border, height: Height, padding: Padding }} className={Styles.MainContainer}>
            <div className={Styles.LogoContainer}>
                <img src={MainLogo} alt="" />
                <h1 style={{ color: TitleColor }}>Replyment</h1>
            </div>
            {email ? (
                <div>
                    <div className={Styles.ButtonContainer}>
                    </div>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            <p className={Styles.EmailAddress}>{email}</p>
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={dispach(logoutAction())}>Log out</MenuItem>
                            <MenuItem onClick={handleNavigate(`/Customize`)}>Get your button</MenuItem>
                        </MenuList>
                    </Menu>
                </div>

            ) : (ShowButtons && !isSmallScreen) ? (
                <div className={Styles.ButtonContainer}>
                    <p className={Styles.EmailAddress}>{email}</p>
                    <button onClick={handleNavigate("Login")} className={Styles.LogInButton}>Log In</button>
                    <button onClick={handleNavigate("Register")} className={Styles.RegisterButton}>Get your button</button>
                </div>
            ) : null}
            {ShowButtons && isSmallScreen ? (
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
                        <MenuItem onClick={handleNavigate("Login")}>
                            <p>{email}</p>
                        </MenuItem>
                        <MenuItem onClick={handleNavigate("Login")}>
                            Log In
                        </MenuItem>
                        <MenuItem onClick={handleNavigate("Register")}>
                            Get your button
                        </MenuItem>
                    </MenuList>
                </Menu>
            ) : null}

            {ShowBurgerMenu && isSmallScreen ? (
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                        border={'none'}
                        color={'black'}
                        fontSize={26}
                    />
                    <MenuList>
                        {MenuItems.map((element, index) => (
                            <MenuItem onClick={handleNavigate(element)} className={Styles.InlineMenuText} key={index}>{element}</MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            ) : null}
        </div>
    );
}
