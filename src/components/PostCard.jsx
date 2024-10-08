import React from 'react'
import ThreeDotsIcon from '../assets/three-dot-icon.svg'
import ClockIcon from '../assets/clock-icon.svg';
import EditGreen from '../assets/edit-green.svg'
import Suitcase from '../assets/suitcase.svg'

const PostCard = ({h3Title, pDaysAgo}) => {
  return (
    <div className="shadow-lg rounded-lg w-full bg-white p-2 my-2 mx-3 border-neutral-300 ">
      <div className="flex flex-col border-b-zinc-500">
        <div className="flex items-center justify-between w-full my-2">
          <h3 className="text-[#717971] text-[16px] font-bold ">{h3Title}</h3>
          <div>
            <img src={ThreeDotsIcon} alt="three dots" />
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-[#717971] text-[14px]">Ikeja Lagos</p>
          <p className="text-[#717971] text-[14px]">{pDaysAgo}</p>
        </div>
      </div>
      <div className="flex justify-between items-center my-3">
        <div className="flex items-center gap-2">
          <img src={Suitcase} alt="iconsuitcase" className="w-4 h-4" />
          <span className="text-[12px] text-nowrap">2 Years Experience</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={ClockIcon} alt="icon clock" className="w-4 h-4" />
          <span className="text-[12px] text-nowrap">Full Time</span>
        </div>
        <div className="flex items-center gap-2 ">
          <img src={EditGreen} alt="edit" className="w-4 h-4" />
          <span className="text-[12px]">15 Applications</span>
        </div>
      </div>
      <div>
        <p className="text-[#717971] text-[14px] my-1">
          We are looking for someone who is committed to learning and growing
          with the Company. Your must have a Bachelors in Computer Science with
          over two years of strong and demonstrated work experience in the
          field.
        </p>
      </div>
    </div>
  );
}

export default PostCard
