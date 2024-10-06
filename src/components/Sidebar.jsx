import React from 'react'
import Home from '../assets/icons8-home.svg'
import Forum from '../assets/forum-icon.svg'

const Sidebar = () => {
  return (
    <div className="sidebar w-1/4 h-screen bg-[#006d3e]">
      <div className='flex flex-col gap-2 justify-center'>
        <div className='flex gap-2 ttext-white'>
          <img src={Home} alt="home" />
          <p>Home</p>
        </div>
        <div>
          <img src={Forum} alt="forum" />
          <p>Forum</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

      </div>
      
    </div>
  )
}

export default Sidebar
