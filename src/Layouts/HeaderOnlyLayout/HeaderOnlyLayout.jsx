import React, { useState, useEffect } from 'react';
import Styles from './MenuLayour.module.css';
import { Outlet, useNavigate } from 'react-router';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '../../Components/Header/Header';

export default function MenuLayout({ position, titleColor, border, height, padding }) {
    return (
        <div className={Styles.Main}>
            <div className={Styles.Outlet}>
                <ChakraProvider>
                    <Header  ShowButtons={false} ShowBurgerMenu={false} Height={height} Padding={padding} TitleColor={titleColor} Position={position} Border={border} />
                </ChakraProvider>
                <div className={Styles.ContentContainer}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
