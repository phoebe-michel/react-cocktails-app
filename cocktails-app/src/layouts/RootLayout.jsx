import React from "react";
import Nav from "./../components/Nav";
import { Outlet, useLocation } from "react-router-dom";
import HeaderImages from "./../components/HeaderImages";
import SearchBar from "./../components/SearchBar";
import Hero from "../components/Hero";

const RootLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Check if the current path is exactly "/"
  const isHome = currentPath === "/";

  return (
    <div className="relative">
      <Nav />
      <div className="relative">
        {isHome && <Hero />}
        <HeaderImages />
        <SearchBar />
      </div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
