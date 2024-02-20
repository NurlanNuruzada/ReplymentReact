import React from "react";
import { Outlet } from "react-router-dom";
import  Footer  from "../Pages/Footer";
import { Header } from "../Pages/Header";
export function MainLayout() {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
}
