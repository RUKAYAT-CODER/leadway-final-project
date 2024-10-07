import React from "react";

function OverViewCard({ image, headerText, text, backgroundColor }) {
  return (
    <div>
      <div
        className={`flex flex-col items-center w-full p-6 gap-5 rounded shadow bg-[${backgroundColor}]`}
      >
        <div>
          <img src={image} alt='user' width={40} />
        </div>
        <div>
          <h2 className="text-[#172B4D] text-[36px] font-bold">{headerText}</h2>
          <p className="text-[#172B4D] text-sm font-normal whitespace-nowrap">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OverViewCard;
