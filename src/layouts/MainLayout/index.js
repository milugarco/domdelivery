import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div style={{ left: 0, right: 0, top: 0, bottom: 0, margin: 0 }}>
      <Outlet />
    </div>
  );
};

export default MainLayout;
