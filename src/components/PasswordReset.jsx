import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import TeachForNigeria from "../assets/Teach-for-Nigeria-logo.svg";
import LeftArrow from "../assets/arrow-left.svg";
import OTPInput from "../ui/OtpInput";

const ForgotPassword = () => {
  const navigate = useNavigate();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .required("Required"),
  });

  // Submit handler
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    navigate("/dashboard"); // Navigate to the home page after submission
    setSubmitting(false);
    resetForm();
  };

  const handlePasswordChange = (e, setFieldValue) => {
    const { value } = e.target;
    setFieldValue("password", value);
  };

  return (
    <div className="flex flex-col w-full lg:flex-row-reverse lg:w-full lg:h-screen gap-0">
      <div className="bg-hero-pattern bg-no-repeat bg-cover h-[400px] p-5 rounded-2xl w-full md:h-[500px] lg:w-[45%] gap-0 lg:h-screen lg:border-t-r-2 lg:border-b-r-2 lg:border-l-t-0 lg:border-b-l-0 lg:shadow-sm lg:p-4 lg:-ml-4">
        <img src={TeachForNigeria} alt="Logo" className="w-1/2 lg:-mt-40" />
        <h1 className="text-white font-bold text-center text-4xl mb-7 mt-10  lg:mt-96 lg:text-5xl">
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
          <Form className="p-4 flex flex-col gap-4 bg-[#F5F6FA] z-10 -mt-12 mx-4 rounded-l-lg rounded-r-lg h-full lg:w-[55%] md:h-[700px]  md:-mt-20 lg:p-5 lg:h-screen lg:-ml-12 lg:mt-0">
            <img
              src={TeachForNigeria}
              alt="Logo"
              className="hidden lg:block lg:w-1/4  "
            />
            <h2 className="text-[#01884F] font-bold text-lg text-center py-6 lg:text-[30px] lg:mt-24">
              Password Reset
            </h2>
          <div className='flex items-center'>
            <OTPInput />
          </div>
           

            {/* Submit Button */}
            <button
              type="submit"
              className="button bg-[#01884F] text-white text-[18px] text-bold py-4 rounded-lg mt-7 mb-20"
              disabled={isSubmitting}
              handleSubmit={handleSubmit}
            >
              Continue
            </button>
          </Form>
        )}
      </Formik>
      <div className="absolute bottom-30 left-20 z-40 flex">
        <img src={LeftArrow} alt="back arrow" className="w-4 h-4 mr-5" />
        <Link to="/login" className="text-[#01884f]">
          Back to sign in
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
