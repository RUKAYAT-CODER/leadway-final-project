import React from 'react'
import ProfileLady from "../assets/profile-pix-lady.svg";
import LoveIcon from '../assets/LoveIcon-red.svg'
import SavedIcon from '../assets/SavedBtn-blue.svg'
import MessageIcon from '../assets/iconMessage.svg'

const Forum = () => {
  return (
    <div className=" border border-b-2 ">
      <div classname="border-zinc-800 p-2">
        <p className="text-gray-400 my-2">
          Start a discussion or question related to alumini, career, business or
          freeelancing
        </p>
        
        <div className="flex items-center justify-between bg-white ronded shadow-md">
          <div className="flex items-center">
            <span>Recent Thread</span>
            <span className="text-gray-400">Popular This Week </span>
            <span className="text-gray-400">Past Post</span>
          </div>
          <span>Recommended Topics</span>
        </div>
        <div>
          <div className="flex-gap-3">
            <div>
              <img src={ProfileLady} alt="user" className="w-6" />
            </div>
            <div>
              <p className="font-bold text-[18px] my-3">
                What Do You Think About OpenChat GPT?
              </p>
              <p className="text-[#006d3e]">
                Sam Larry
                <span className="text-zinc-400">
                  
                  <div className="rounded-full border bg-zinc-400 w-2 h-2"></div>
                  30 mins ago
                </span>
                <div className="rounded-full border bg-zinc-400 w-2 h-2"></div>
                in Technology
              </p>
            </div>
          </div>
          <div>
            <p className="my-2">
              The chatbot, which interactsin a conversational way, also answers
              follo-up questions, admits mistakes, challenges incorrect
              premisesand rejects inappropriate requests.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {" "}
                <img src={LoveIcon} alt="icons" /> <span>10</span>
              </div>
              <div className="flex items-center gap-1">
                {" "}
                <img src={SavedIcon} alt="icons" /> <span>2</span>
              </div>
              <div className="flex items-center gap-1">
                {" "}
                <img src={MessageIcon} alt="icons" /> <span>5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum
