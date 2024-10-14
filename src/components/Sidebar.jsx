// src/components/Sidebar.js

import React from "react";
import {
  IoMdClose,
  IoMdHome,
  IoIosPeople,
  IoMdSettings,
  IoMdLogOut,
  IoIosBriefcase,
  IoMdPerson,
  IoIosCalendar,
  IoMdOptions,
} from "react-icons/io";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Teach-for-Nigeria-logo.svg"; // Ensure correct path
<ion-icon name="briefcase-outline"></ion-icon>;

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const top_links = [
    { label: "Dashboard", to: "/dashboard", icon: <IoMdHome /> },
    { label: "Profile", to: "/personalDetails", icon: <IoMdPerson /> },
    { label: "Directory", to: "/directory", icon: <IoMdOptions /> },
    { label: "Forum", to: "/forum", icon: <IoIosPeople /> },
    { label: "Events", to: "/events", icon: <IoIosCalendar /> },
    { label: "Jobs", to: "/jobs", icon: <IoIosBriefcase /> },
    { label: "Settings", to: "/settings", icon: <IoMdSettings /> },
    { label: "Log out", to: "/logout", icon: <IoMdLogOut /> },
  ];

  return (
    <div className="flex flex-col w-full h-full relative bg-[#006d3e]">
      {/* Close button for small screens */}
      {isOpen && (
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 lg:hidden p-2 focus:outline-none"
        >
          <IoMdClose className="h-6 w-6 text-white" />
        </button>
      )}

      {/* Logo */}
      <div className="flex items-center mb-8 p-4">
        <img src={Logo} alt="logo" className="w-32" />
      </div>

      <hr className="mb-4 border-gray-300" />

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-3 px-4">
        {top_links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-3 text-white bg-[#006d3e] p-2 rounded-md"
                : "flex items-center space-x-3 text-[#ffffff] p-2 hover:bg-[#bcf8b4] rounded-md"
            }
          >
            {link.icon}
            <span className="text-sm">{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
