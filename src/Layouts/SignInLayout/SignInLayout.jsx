import React from 'react'
import Styles from "./SignInLayout.module.css"
import { ChakraProvider } from '@chakra-ui/react'
import { Outlet } from 'react-router'
import Header from '../../Header/Header'
export default function SignInLayout() {
    return (
        <div className={Styles.Main}>
            <div className={Styles.Outlet}>
                <ChakraProvider  >
                    <Header ShowButtons={false} />
                </ChakraProvider>
                <Outlet />
            </div>
        </div>
    )
}
