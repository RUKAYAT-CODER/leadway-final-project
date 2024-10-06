import React from "react";

function Button({ children, backgroundColor, textColor }) {
  return (
    <div>
      <button
        className={`px-[12px] py-[6px] text-[#403294] text-[${textColor}] bg-[${backgroundColor}] 
        rounded text-[13px] font-semibold `}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
