import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import Home from '../assets/icons8-home.svg'
import Forum from '../assets/forum-icon.svg';
import Logo from '../assets/Teach-for-Nigeria-logo.svg'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
 
  
  return (
    <div className="bg-[#006d3e] w-40 px-4 inset-y-0 left-0 h-full">
      <div className="pt-10">
        <img src={Logo} alt="logo" className=" border-b-[#c7f084]" />
      </div>
      <div
        className={` transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-[#017b47] text-white w-30 rounded-lg my-10 h-1/2`}
      >
        <span onClick={toggleSidebar} className="absolute top-4 right-4">
          <img src="" alt="" />
        </span>
        <nav className="mt-5">
          <NavLink
            to="/home"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-[#018847 flex items-center"
            activeClassName="bg-[#765555]"
          >
            <img src={Home} alt="home" className="mr-3" /> Home
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar
