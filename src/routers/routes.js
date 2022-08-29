import { Navigate } from "react-router-dom";
import React from "react";

import MainLayout from "../layouts/MainLayout";
import Home from "../page/Home";

/*Imports Dashboard Cliente*/
import DashboardLayout from "../layouts/DashboardLayout";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "404", element: <Home /> },
      { path: "/", element: <Navigate to="/home" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  /* {
    path: "app",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  }, */
];

export default routes;
