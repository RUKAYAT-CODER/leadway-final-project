import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import GetPasswordStrength from "../utilities/GetPasswordStrength";
import FormInput from "./FormInput"; // Assuming this is the path
import { Link, useNavigate } from "react-router-dom";
import TeachForNigeria from "../assets/Teach-for-Nigeria-logo.svg";
import { GetStrengthColor } from "../utilities/GetStrengthColor";

const Login = () => {
  const navigate = useNavigate();
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .required("Required"),
  });

  // Submit handler
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    navigate("/home"); // Navigate to the home page after submission
    setSubmitting(false);
    resetForm();
  };

  const handlePasswordChange = (e, setFieldValue) => {
    const { value } = e.target;
    setFieldValue("password", value);
    const strength = GetPasswordStrength(value);
    setPasswordStrength(strength);
  };

  return (
    <div className="flex flex-col w-full md:flex-row-reverse md:w-full md:h-screen gap-0">
      <div className="bg-hero-pattern bg-no-repeat bg-cover h-80 p-5 rounded-2xl w-full md:w-[45%] gap-0 md:h-screen md:border-t-r-2 border-b-r-2 border-l-t-0 border-b-l-0 shadow-sm md:p-4 md:-ml-7">
        <h1 className="text-white font-bold text-center text-4xl mb-6 md:mt-80">
          Welcome to the Community
        </h1>
        <p className="text-white font-bold text-center">
          Be inspired by Creatives Around the Globe
        </p>
      </div>

      {/* Formik Wrapper */}
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors, setFieldValue }) => (
          <Form className="p-4 flex flex-col gap-4 bg-[#F5F6FA] z-10 justify-center -mt-10 mx-4 rounded-lg md:w-[55%]">
            <img src={TeachForNigeria} alt="Logo" className="-mt-40"/>
            <h2 className="text-[#01884F] font-bold text-lg text-center py-6">
              Sign in to Dashboard
            </h2>

            {/* Email Input */}
            <FormInput
              id="email" // Correct the id
              label="Email Address"
              name="email"
              type="email"
              touched={touched.email}
              error={errors.email}
            />

            {/* Password Input */}
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2">
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                onChange={(e) => handlePasswordChange(e, setFieldValue)}
                className={`p-2 text-sm border-2 rounded shadow-md ${
                  touched.password && errors.password
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {touched.password && errors.password && (
                <div className="text-red-700 mt-1">{errors.password}</div>
              )}

              {/* Password Strength Indicator - Single Color */}
              <div className="flex space-x-2 mt-1">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`h-2 w-1/4 rounded transition ease-in-out duration-300`}
                    style={{
                      backgroundColor:
                        passwordStrength >= i
                          ? GetStrengthColor(passwordStrength) // Show one color based on current strength
                          : "#E5E7EB",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Remember Me and Reset Password */}
            <div className="flex justify-between">
              <div className="flex gap-2">
                <label>
                  <Field type="checkbox" name="rememberMe" className="mr-2" />
                  Remember Me
                </label>
              </div>
              <div>
                <Link to="/reset-password" className="text-[#01884f]">
                  Reset Password!
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="button bg-[#01884F] text-white text-bold py-2 rounded my-6"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;



