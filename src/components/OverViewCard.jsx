import React from "react";

function OverViewCard({ image, headerText, text, backgroundColor }) {
  return (
    <div>
      <div
        className={`flex items-center w-full p-6 gap-5 rounded shadow bg-[${backgroundColor}]`}
      >
        <div>
          <img src={image} alt="plus-sign" width={60} />
        </div>
        <div>
          <h2 className="text-[#172B4D] text-[40px] font-bold">{headerText}</h2>
          <p className="text-[#172B4D] text-sm font-normal whitespace-nowrap">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OverViewCard;
