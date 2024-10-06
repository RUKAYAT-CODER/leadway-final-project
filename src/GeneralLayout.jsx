import React from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

const GeneralLayout = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div>
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default GeneralLayout
