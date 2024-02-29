import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Banner } from "../Banner/Banner";
import Styles from "../Layouts/MainLayout.module.css"
import Header from "../Header/Header";
import { ChakraProvider } from '@chakra-ui/react'

export function MainLayout() {
  return (
    <div className={Styles.Main}>
      <div className={Styles.Outlet}>
        <ChakraProvider >
        </ChakraProvider>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
