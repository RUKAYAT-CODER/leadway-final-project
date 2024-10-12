// FormGroup.js
import React from "react";

const FormGroup = ({
  label,
  id,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
}) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="mb-1 font-medium">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006d3e]"
        placeholder={placeholder}
        rows="4"
      />
    ) : (
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006d3e]"
        placeholder={placeholder}
      />
    )}
  </div>
);

export default FormGroup;
