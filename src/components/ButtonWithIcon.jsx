import React from 'react'

const ButtonWithIcon = ({ children, backgroundColor, textColor }) => {
  return (
    <div>
      <img src="" alt="" />
      <button
        className={`px-[12px] py-[6px] text-[#ffffff] text-[${textColor}] ${backgroundColor} 
        rounded text-[13px] font-semibold `}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonWithIcon
