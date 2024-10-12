// src/GeneralLayout.js

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const GeneralLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full min-h-screen flex">
      {/* Sidebar for large screens (always visible) */}
      <div className="hidden lg:flex w-[192px] h-screen fixed">
        <Sidebar isOpen={true} toggleSidebar={toggleSidebar} />
      </div>

      {/* Sidebar and Overlay for small screens */}
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={toggleSidebar}
          ></div>

          {/* Sidebar */}
          <div className="fixed inset-y-0 left-0 w-64 bg-[#006d3e] shadow-md z-40 lg:hidden transform transition-transform duration-300">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </div>
        </>
      )}

      {/* Main content area */}
      <div className="flex flex-col lg:ml-[192px] w-full">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="overflow-y-auto px-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GeneralLayout;
