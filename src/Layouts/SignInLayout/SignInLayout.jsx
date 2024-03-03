import React from 'react'
import Styles from "./SignInLayout.module.css"
import { ChakraProvider } from '@chakra-ui/react'
import { Outlet } from 'react-router'
import SignHeader from '../../Components/SignHeader/SignHeader'
export default function SignInLayout() {
    return (
        <div className={Styles.Main}>
            <div className={Styles.Outlet}>
                <ChakraProvider  >
                    <SignHeader ShowButtons={false} />
                </ChakraProvider>
                <Outlet />
            </div>
        </div>
    )
}
