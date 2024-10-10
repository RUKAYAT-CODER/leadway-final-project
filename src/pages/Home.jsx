import React from 'react'
import Logo from '../assets/Teach-for-Nigeria-logo.svg'
import UserIcon from '../assets/user-icon-green.svg'
import UserIcon from '../assets/down-arrow.svg'
import CreateNewButton from '../components/CreateNewButton'

const Home = () => {
  return (
    <div className="w-full bg-[#ffffff]">
      <div className="w-full mx-auto max-w-[1240px] px-5 py-4 flex justify-between items-center md:px-0">
        <div className='flex flex-col items-center gap-1'>
          <img src={Logo} alt="logo" className="" />
          <p>Alumini Portal</p>
        </div>
        <nav className='flex items-center justify-between'>
          <a href="">About Us</a>
          <a href="">Connect with the Community</a>
          <a href="">Go to Dashboard</a>
        </nav>
        <div>
          <img src={UserIcon} alt="icon user" />
          <img src={Arrowdown} alt="Down arrow" />
        </div>
      </div>
      <div className=' mx-auto max-w-[1080px] px-5 py-4 flex justify-between items-center md:px-0'>
        <h3>Looking for the Next <span className='text-[#006d3e]'>Opportunity?</span></h3>
        <p className='my-5 text-[#717171]'>Teach for Nigeria continue to provide opportunities, events, resources and leadership development</p>
        <CreateNewButton></CreateNewButton>
      </div>
    </div>
  );
}

export default Home
