import React from 'react'
import Search from './Search'
import Settings from '../assets/settings.svg'
import Notification from '../assets/notification-icon.svg'
import Message from '../assets/comments.svg';
import User from '../assets/admin-samuel.svg';
import Downarrow from '../assets/show-down-arrow.svg';

const Navbar = () => {
  return (
  
      <div className="flex justify-between bg-white h-[60px] shadow-sm items-center p-4">
          <Search />

        <div className='flex justify-end '>
          <div className='flex gap-2 item-center'>
            <div className='mr-2'><img src={Settings} alt="settings" className='w-4' /></div>
            <div className='mr-2'><img src={Notification} alt="notifications" className='w-4' /></div>
            <div className='mr-2'><img src={Message} alt="messages" className='w-4'/></div>
          </div>
          <div className='flex gap-2 '>
            <div>
              <img src={User} alt="user" className='w-4 h-4 rounded-full' />
            </div>
            <div className='flex flex-col gap-2 item-center'>
              <p className="text-sm">Samuel Chibueze</p>
              <div className='flex gap-2'>
                <span className='text-[#006d3e] text-[10px] '>Admin</span>
                <img src={Downarrow} alt="down arrow" className='w-2' />
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Navbar
