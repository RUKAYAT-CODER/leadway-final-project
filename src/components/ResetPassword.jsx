import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import GetPasswordStrength from "../utilities/GetPasswordStrength";
import FormInput from "./FormInput"; // Assuming this is the path
import { Link, useNavigate } from "react-router-dom";
import TeachForNigeria from "../assets/Teach-for-Nigeria-logo.svg";
import LeftArrow from "../assets/long-arrow-green.svg"
import { GetStrengthColor } from "../utilities/GetStrengthColor";

const ResetPassword = () => {
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
    <div>
      <div className="flex flex-col w-full md:flex-row-reverse md:w-full md:h-screen gap-0">
        <div className="bg-hero-pattern bg-no-repeat bg-cover h-80 p-5 rounded-2xl w-full md:w-[45%] gap-0 md:h-screen md:border-t-r-2 border-b-r-2 border-l-t-0 border-b-l-0 shadow-sm md:p-4 md:-ml-7">
          <h1 className="text-white font-bold text-center text-4xl mb-6 md:mt-40">
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
              <img src={TeachForNigeria} alt="Logo" className="-mt-40" />
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

              {/* Submit Button */}
              <button
                type="submit"
                className="button bg-[#01884F] text-white text-bold py-2 rounded my-6"
                disabled={isSubmitting}
              >
                Reset Password
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="absolute bottom-20 left-20 z-40 flex">
        <img src={LeftArrow} alt="back arrow" />
        <Link to="/reset-password" className="text-[#01884f]">
          Back to sign in
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;



