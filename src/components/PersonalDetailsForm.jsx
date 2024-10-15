// src/components/PersonalDetailsForm.js
import LeftArrow from "../assets/arrow-left.svg";
import React, { useContext } from "react";
import PersonalDetailsContext from "./context/PersonalDetailsContext";
// import ProfileLady from "../assets/profile-pix-lady.svg";
import FormGroup from "../ui/FormGroup"

const PersonalDetailsForm = () => {
  const {
    formData,
    showSections,
    toggleSection,
    handleChange,
    handleSave,
    handleFinish,
  } = useContext(PersonalDetailsContext);

  return (
    <div className="p-4">
      {/* Profile Header */}
      <div className="flex gap-3 mb-4 items-center">
        // <div>
        //   <img src={ProfileLady} alt="user" className="w-14" />
        // </div>
        <div>
          <p className="font-bold">Profile</p>
          <p>Update your Personal data</p>
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="border-b border-x-stone-500 mb-4 pb-4">
        <label
          htmlFor="personalDetails"
          className="flex items-center justify-between font-bold mb-3 shadow-md rounded-lg p-2 max-w-[800px] mx-auto cursor-pointer"
          onClick={() => toggleSection("personalDetails")}
        >
          Personal Information
          <img
            src={LeftArrow}
            alt="toggle section"
            className="w-4 transform transition-transform duration-200"
          />
        </label>
        {showSections.personalDetails && (
          <div className="max-w-[800px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <FormGroup
                label="Username:"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
              />
              <FormGroup
                label="Phone Number:"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <FormGroup
                label="Email:"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              <FormGroup
                label="Gender:"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Enter your gender"
              />
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={() => handleSave("personalDetails")}
                className="bg-[#006d3e] text-white px-4 py-2 rounded-md hover:bg-[#00532c] transition-colors duration-200"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      {/* About Me Section */}
      <div className="border-b border-x-stone-500 mb-4 pb-4">
        <label
          htmlFor="aboutMe"
          className="flex items-center justify-between font-bold mb-3 shadow-md rounded-lg p-2 max-w-[800px] mx-auto cursor-pointer"
          onClick={() => toggleSection("aboutMe")}
        >
          About Me
          <img
            src={LeftArrow}
            alt="toggle section"
            className="w-4 transform transition-transform duration-200"
          />
        </label>
        {showSections.aboutMe && (
          <div className="max-w-[800px] mx-auto">
            <FormGroup
              label="About Me:"
              id="aboutMe"
              name="aboutMe"
              type="textarea"
              value={formData.aboutMe}
              onChange={handleChange}
              placeholder="Tell us about yourself"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <FormGroup
                label="Interest:"
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                placeholder="Your interests"
              />
              <FormGroup
                label="Goals:"
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                placeholder="Your goals"
              />
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={() => handleSave("aboutMe")}
                className="bg-[#006d3e] text-white px-4 py-2 rounded-md hover:bg-[#00532c] transition-colors duration-200"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Work/Education Section */}
      <div className="border-b border-x-stone-500 mb-4 pb-4">
        <label
          htmlFor="workEducation"
          className="flex items-center justify-between font-bold mb-3 shadow-md rounded-lg p-2 max-w-[800px] mx-auto cursor-pointer"
          onClick={() => toggleSection("workEducation")}
        >
          Work/Education
          <img
            src={LeftArrow}
            alt="toggle section"
            className="w-4 transform transition-transform duration-200"
          />
        </label>
        {showSections.workEducation && (
          <div className="max-w-[800px] mx-auto">
            <FormGroup
              label="Work/Education:"
              id="workEducation"
              name="workEducation"
              type="textarea"
              value={formData.workEducation}
              onChange={handleChange}
              placeholder="Your work and education details"
            />
            <FormGroup
              label="Educational Background:"
              id="educationalbackground"
              name="educationalbackground"
              value={formData.educationalbackground}
              onChange={handleChange}
              placeholder="Your educational background"
            />
            <div className="text-right">
              <button
                type="button"
                onClick={() => handleSave("workEducation")}
                className="bg-[#006d3e] text-white px-4 py-2 rounded-md hover:bg-[#00532c] transition-colors duration-200"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Skills Section */}
      <div className="border-b border-x-stone-500 mb-4 pb-4">
        <label
          htmlFor="skills"
          className="flex items-center justify-between font-bold mb-3 shadow-md rounded-lg p-2 max-w-[800px] mx-auto cursor-pointer"
          onClick={() => toggleSection("skills")}
        >
          Skills
          <img
            src={LeftArrow}
            alt="toggle section"
            className="w-4 transform transition-transform duration-200"
          />
        </label>
        {showSections.skills && (
          <div className="max-w-[800px] mx-auto">
            <FormGroup
              label="Skills:"
              id="skills"
              name="skills"
              type="textarea"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Your skills"
            />
            <div className="text-right">
              <button
                type="button"
                onClick={() => handleSave("skills")}
                className="bg-[#006d3e] text-white px-4 py-2 rounded-md hover:bg-[#00532c] transition-colors duration-200"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Social Media Section */}
      <div className="border-b border-x-stone-500 mb-4 pb-4">
        <label
          htmlFor="socialmedia"
          className="flex items-center justify-between font-bold mb-3 shadow-md rounded-lg p-2 max-w-[800px] mx-auto cursor-pointer"
          onClick={() => toggleSection("socialmedia")}
        >
          Social Media
          <img
            src={LeftArrow}
            alt="toggle section"
            className="w-4 transform transition-transform duration-200"
          />
        </label>
        {showSections.socialmedia && (
          <div className="max-w-[800px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <FormGroup
                label="LinkedIn:"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="Your LinkedIn profile"
              />
              <FormGroup
                label="Twitter:"
                id="twitter"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                placeholder="Your Twitter handle"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <FormGroup
                label="Instagram:"
                id="instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                placeholder="Your Instagram profile"
              />
              <FormGroup
                label="Facebook:"
                id="facebook"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
                placeholder="Your Facebook profile"
              />
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={() => handleSave("socialmedia")}
                className="bg-[#006d3e] text-white px-4 py-2 rounded-md hover:bg-[#00532c] transition-colors duration-200"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Finish Button */}
      <div className="text-right">
        <button
          type="button"
          onClick={handleFinish}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200"
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
