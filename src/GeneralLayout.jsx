import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const GeneralLayout = () => {
  return (
    <div className="w-full min-h-screen flex">
      <div className="hidden w-[192px] h-screen fixed md:flex flex-col">
        <Sidebar />
      </div>
      <div className="flex flex-col lg:ml-[192px] w-full">
        <Navbar />
        <div className="overflow-y-auto px-3 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GeneralLayout;
