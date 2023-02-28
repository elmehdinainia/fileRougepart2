import React from "react";
import { Outlet } from "react-router-dom";
import Background from "./background.jsx";

const Layout = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Outlet />
      </div>
      <Background />
    </div>
  );
};

export default Layout;
