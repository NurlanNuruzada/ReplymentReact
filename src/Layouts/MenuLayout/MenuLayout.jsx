import React from 'react'
import Styles from './MenuLayour.module.css'
import { Outlet } from 'react-router'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '../../Components/Header/Header'
import MenuButton from '../../Components/Buttons/MenuButton/MenuButton'

export default function MenuLayout({ position, titleColor, border, height, padding }) {
    return (
        <div className={Styles.Main}>
            <div className={Styles.Outlet}>
                <ChakraProvider >
                    <Header Height={height} Padding={padding} TitleColor={titleColor} Position={position} Border={border} ShowButtons={false} />
                </ChakraProvider>
                <div>
                    <div>
                        <MenuButton />
                        <MenuButton />
                        <MenuButton />
                        <MenuButton />
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
