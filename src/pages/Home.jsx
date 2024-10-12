import React from 'react'
import Logo from '../assets/Teach-for-Nigeria-logo.svg'
import UserIcon from '../assets/user-icon-green.svg'
import Arrowdown from '../assets/down-arrow.svg'
import HeroImage from '../assets/two-pictures-home.svg'
import HomeCard from '../components/HomeCard'
import CalendarIcon from '../assets/calendar-empty.svg'
import LongArrow from '../assets/long-arrow-green.svg'
import LongArrowWhite from '../assets/long-arrow-white.svg'
import { useNavigate, Link } from 'react-router-dom'



const Home = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/login')
  }
  return (
    <div className="w-full">
      <div className="w-full bg-[#ffffff] mx-auto max-w-[1240px] px-5 py-4 flex justify-between items-center h-[70px]">
        <div className="flex flex-col items-center gap-1">
          <div className="">
            <img src={Logo} alt="logo" className="" />
          </div>
          <p className=" text-[18px] md:text-[18px] border-t-2 border-x-gray-950 ">
            Alumini Portal
          </p>
        </div>
        <nav className=" hidden lg:inline-flex lg:items-center lg:justify-between lg:space-x-4">
          <a href="#" className='text-14px'>About Us</a>
          <a href="#" className='text-14px'>Connect with the Community</a>
          <a href="#" className='text-14px'>Go to Dashboard</a>
        </nav>
        <div className="flex items-center justify-between gap-2">
          <img src={UserIcon} alt="icon user" className="w-[30px]" />
          <img src={Arrowdown} alt="Down arrow" className="w-[10px] h-[10px]" />
        </div>
      </div>
      <div className=" mx-auto max-w-[1080px] px-5 py-4 flex flex-col items-center">
        <h3 className=" text-[24px] lg:text-[40px] font-bold">Looking for the Next </h3>
        <span className="text-[24px] text-[#006d3e] font-bold lg:text-[40px] py-2">
          Opportunity?
        </span>
        <p className="my-3 text-[#717171] text-[16px] lg:text-[18px] mb-3">
          Teach for Nigeria continue to provide opportunities, events, resources
          and leadership development
        </p>
        <div className="flex items-center gap-2 relative">
          <img
            src={LongArrowWhite}
            alt="back arrow"
            className="w-6 h-6 absolute top-6 right-4"
          />
          <button
            type="button"
            onClick={handleNavigate}
            className="bg-[#006d3e] text-white px-14 text-[14px] py-3 my-4 rounded-lg "
          >
            Back to Dashboard
          </button>
        </div>
        <div className="py-6">
          <img src={HeroImage} alt="hero image" className="" />
        </div>
      </div>
      <section className="bg-[#f5f5f9] mx-auto max-w-[1080px] px-5 py-10 flex flex-col items-center">
        <h3 className=" text-[20px] font-bold lg:text-[30px] text-[#1c1b1f] mb-3">
          TFN Alumni Impact Stories
        </h3>
        <p className="text-[#484649] mb-4">
          Across professional sectors and geography, TFN alumni fight for the
          aspiration of students and their families. Read about the remarkable
          work of the TFN alumni network.
        </p>
        <div className="grid  gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
      </section>
      <section className="bg-[#ffffff] mx-auto max-w-[1080px] px-5 py-8 flex flex-col items-center">
        <h3 className="mb-3 text-[28px]">News and Event</h3>
        <div className="flex items-center justify-between mb-10">
          <div className=" flex gap-2">
            <div className="flex flex-col mr-3 ">
              <div className="p-3 bg-[#006d3e] text-[14px] text-white w-12 h-12">
                <p className="text-center">01</p>
              </div>
              <div className="p-3 bg-[#476806] text-[14px] text-white w-12 h-12">
                <p className="text-center">MAR</p>
              </div>
            </div>
            <div>
              <p className="text-[#006d3e] mb-2 border-b-2 my-3 border-stone-900">
                Lorem ipsum dolor sit amet consectetur. Aliquam est quis sit nec
                mattis cras. In odio odio volutpat in viverra in facilisi.{" "}
                <br />
                <span className="text-black my-4">Read More</span>
              </p>
              <div className="flex gap-2">
                <p>More News</p>
                <img src={LongArrow} alt="aroow left " className="w-6" />
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <img src={CalendarIcon} alt="store icon" />
          </div>
        </div>
        <div className="bg-[#00210f] h-9 border w-full mt-4"></div>
      </section>
    </div>
  );
}

export default Home
