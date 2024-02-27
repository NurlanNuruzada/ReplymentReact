import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Banner } from "../Banner/Banner";
import Styles from "../Layouts/MainLayout.module.css"
export function MainLayout() {
  return (
    <div className={Styles.Main}>
      <Banner />
      <div className={Styles.Outlet}>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}