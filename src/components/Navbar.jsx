import React from 'react'
import Search from './Search'
import Settings from '../assets/setting.svg'
import Notification from '../assets/notification.svg'
import Message from '../assets/iconMessage.svg';
import User from '../assets/admin-samuel.svg';
import Downarrow from '../assets/show-down-arrow.svg';
// import Hamburger from '../assets/hamburger.svg'

const Navbar = () => {
  return (
    <div className=" hidden lg:flex lg:justify-between lg:bg-white lg:h-[60px] lg:shadow lg:items-center lg:p-4">
      <Search />

      <div className="flex justify-end ">
        <div className="flex gap-2 items-center justify-between">
          {/* <div>
            <img src={Hamburger} alt="hamburger-menu" />
          </div> */}
          <div className="mr-2">
            <img src={Settings} alt="settings" className="" />
          </div>
          <div className="mr-2">
            <img
              src={Notification}
              alt="notifications"
              className=""
            />
          </div>
          <div className="mr-2">
            <img src={Message} alt="messages" className="" />
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <div>
            <img src={User} alt="user" className="" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[10px]">Samuel Chibueze</p>
            <div className="flex gap-1">
              <span className="text-[#006d3e] text-[8px] ">Admin</span>
              <img src={Downarrow} alt="down arrow" className="w-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
