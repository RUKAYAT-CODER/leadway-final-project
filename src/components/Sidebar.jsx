import Home from "../assets/icons8-home.svg";
import Forum from "../assets/forum-icon.svg";
import Logo from "../assets/Teach-for-Nigeria-logo.svg";
import React, { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const top_links = [
    { label: "Dashboard", to: "/dashboard", icon: <IoMdMenu /> },
    { label: "Profile", to: "/profile", icon: <IoMdMenu /> },
    { label: "Directory", to: "/directory", icon: <IoMdMenu /> },
    { label: "Forum", to: "/forum", icon: <IoMdMenu /> },
    { label: "Events", to: "/events", icon: <IoMdMenu /> },
    { label: "Jobs", to: "/job", icon: <IoMdMenu /> },
    { label: "Settings", to: "/settings", icon: <IoMdMenu /> },
    { label: "Log out", to: "/logout", icon: <IoMdMenu /> },
  ];

  return (
    <div className="flex flex-col w-full">
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 focus:outline-none top-4 left-4 z-50"
      >
        {isOpen ? (
          <IoMdClose className="h-6 w-6" />
        ) : (
          <IoMdMenu className="h-6 w-6" />
        )}
      </button>

      <div
        className={`inset-y-0 left-0 w-48 bg-[#006d3e] shadow-md transform transition-transform duration-300 md:translate-x-0 flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        <div className="p-4 flex flex-col font-codec-pro h-full">
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 focus:outline-none absolute top-4 right-4"
          >
            <IoMdClose className="h-6 w-6" />
          </button>
          <div className="flex items-center mb-8">
            <img src={Logo} alt="logo" />
          </div>
          <hr />
          <nav className="space-y-3 mt-4">
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
      </div>
    </div>
  );
}

export default Sidebar;
