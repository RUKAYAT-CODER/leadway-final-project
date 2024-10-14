// src/components/Navbar.js

import React from "react";
import Search from "./Search";
import Settings from "../assets/setting.svg";
import Message from "../assets/iconMessage.svg";
import User from "../assets/profile-pix-male.svg";
import Downarrow from "../assets/show-down-arrow.svg";
import { IoMdMenu } from "react-icons/io";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center bg-white h-[60px] shadow px-4 lg:px-8">
      
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 focus:outline-none"
        aria-label="Toggle Sidebar"
      >
        <IoMdMenu className="h-6 w-6" />
      </button>

      <Search />

      <div className="flex items-center space-x-2 lg:space-x-4">
        <img src={Settings} alt="settings" className="w-5 h-5 hidden lg:flex-inline" />
        <img src={Message} alt="messages" className="w-5 h-5 hidden lg:flex-inline" />
        <div className="flex items-center gap-2">
          <img src={User} alt="user" className="w-5 h-5" />
          <div className="flex flex-col items-center">
            <p className="text-[10px]">Samuel Chibueze</p>
            <div className="flex items-center gap-1">
              <span className="text-[#006d3e] text-[8px]">Admin</span>
              <img src={Downarrow} alt="down arrow" className="w-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
