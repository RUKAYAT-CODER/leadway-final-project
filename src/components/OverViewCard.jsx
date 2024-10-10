import React from "react";

function OverViewCard({ image, headerText, text, backgroundColor, h2color, pcolor }) {
  return (
    <div>
      <div
        className={`${backgroundColor} flex flex-col items-center justify-center w-full p-6 gap-5 rounded shadow`} 
      >
        <div className="flex items-center">
          <img src={image} alt='user' width={40} />
        </div>
        <div>
          <h2 className={`text-[${h2color}] text-[36px] font-bold text-center`}>{headerText}</h2>
          <p className={`text-[${pcolor}] text-sm font-normal whitespace-nowrap `}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OverViewCard;
