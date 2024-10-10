import React from 'react'
import Poster from '../assets/poster.svg'
// import Threedots from '../assets/three-dot-icon.svg'
import LocationMap from '../assets/location-map.svg'
import Timer from '../assets/clock-icon.svg'

const EventsComponent = () => {
  return (
    <div className="flex justify-between shadow-lg w-full mb-2 px-2 py-2">
      <div className="mr-2">
        <img src={Poster} alt="poster" />
      </div>
      <div className="">
        <div className='mb-2'>
          <h2 className='mb-2'>Finding the right niche for your business</h2>
          <p className="text-[#717971] text-[12px] mb-2">
            The only thing that can possibly make two hours a messy creative fun
            with a ray of sunshine is that......
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <img src={LocationMap} alt="location" className="w-4" />
              <p className="text-blue-700 text-[10px]">Zoom</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={Timer} alt="clock" className="w-4" />
              <p className="text-[10px]">9:00am - 12:pm</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <img src={Threedots} alt="three dot icon" className='w-6' />
      </div> */}
    </div>
  );
}

export default EventsComponent
