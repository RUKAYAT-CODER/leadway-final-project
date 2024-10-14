import React from "react";

function CreateNewButton({ children, backgroundColor, textColor }) {
  return (
    <div>
      <button
        className={`px-[12px] py-[6px] text-[#ffffff] cursor-pointer text-[${textColor}] ${backgroundColor} 
        rounded text-[13px] font-semibold `}
      
      >
        {children}
      </button>
    </div>
  );
}

export default CreateNewButton;
