import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import Styles from "../Layouts/MainLayout.module.css"
export function MainLayout() {
  return (
    <div className={Styles.Main}>
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
}
