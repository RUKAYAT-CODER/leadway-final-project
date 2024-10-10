import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const GeneralLayout = () => {
  return (
    <div className="grid grid-cols-[160px_1fr] h-screen">
      <div>
        <Sidebar />
      </div>
      <div className=" ">
        <Navbar />
        <div className="overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GeneralLayout;
