import React from "react";
import "./dashboardLayout.css";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="DashboardLayout">
     <div className="menu">menu</div>
     <div className="content">
        <Outlet/>
     </div>
    </div>
  );
}

export default DashboardLayout;
