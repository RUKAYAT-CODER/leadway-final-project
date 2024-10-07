import React from "react";

function CreateNewButton({ children, backgroundColor, textColor }) {
  return (
    <div>
      <button
        className={`px-[12px] py-[6px] text-[#ffffff] text-[${textColor}] bg-[${backgroundColor}] 
        rounded text-[13px] font-semibold `}
      >
        {children}
      </button>
    </div>
  );
}

export default CreateNewButton;
