import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="relative">
      <div className=" absolute inset-x-0  top-0 z-20 pt-8 ">
        <Header />
      </div>

      <main className="min-h-screen ">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
