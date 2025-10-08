import React from "react";
import Navbar from "../../Pages/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Pages/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex-1">
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
