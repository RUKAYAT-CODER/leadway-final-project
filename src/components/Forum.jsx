import React from 'react'
import ProfileLady from "../assets/profile-pix-lady.svg";
import LoveIcon from '../assets/LoveIcon-red.svg'
import Savedcon from '../assets/SavedBtn-blue.svg'

const Forum = () => {
  return (
    <div className="bg-white">
      <div>
        <p className="text-gray-400">
          Start a discussion or question related to alumini, career, business or
          freeelancing
        </p>
        <div></div>
        <div className="flex items center justify-between">
          <div>
            <span>Recent Thread</span>
            <span className="text-gray-400">Popular This Week </span>
            <span className="text-gray-400">Past Post</span>
          </div>
          <span>Recommended Topics</span>
        </div>
        <div>
          <div className='flex-gap-3'>
            <div>
              <img src={ProfileLady} alt="user" className="w-6" />
            </div>
            <div>
              <p className="font-bold text-[18px]">What Do You Think About OpenChat GPT?</p>
              <p className="text-[#006d3e]">
                Sam Larry{" "}
                <span className="text-zinc-400">
                  {" "}
                  <div className="rounded-full border bg-zinc-400 w-2 h-2"></div>
                  30 mins ago
                </span>{" "}
                <div className="rounded-full border bg-zinc-400 w-2 h-2"></div>
                in Technology
              </p>
            </div>
          </div>
          <div>
            <p>The chatbot, which interactsin a conversational way, also answers follo-up questions, admits mistakes, challenges incorrect premisesand rejects inappropriate requests.</p>
            <div>
            <div> <img src={LoveIcon} alt="icons" /></div>
            <div> <img src={SavedIconn} alt="icons" /></div>
            <div> <img src={SavedIconn} alt="icons" /></div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum
