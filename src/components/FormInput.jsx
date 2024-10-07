import React from "react";
import { Field } from "formik";

const FormInput = ({
  label,
  name,
  type = "text",
  errorClass = "text-red-700 mt-1",
  ...props
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="mb-2 font-semibold">
        {label}
      </label>
      <Field name={name}>
        {({ field, form }) => (
          <>
            <input
              id={name}
              type={type}
              {...field} // This spreads Formik's field props like value, onChange, onBlur
              className={`p-4 text-sm border-2 rounded-lg shadow-md  ${
                form.touched[name] && form.errors[name]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              {...props}
            />
            {form.touched[name] && form.errors[name] && (
              <div className={errorClass}>{form.errors[name]}</div>
            )}
          </>
        )}
      </Field>
    </div>
  );
};

export default FormInput;
