import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import RootLayout from "../Layout/RootLayout";
import Service from "../pages/Service";
import ContactPage from "../pages/Contact";
import PropertyDetail from "../pages/PropertyDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="properties/:id" element={<PropertyDetail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
