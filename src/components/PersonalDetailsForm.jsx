
import LeftArrow from '../assets/arrow-left.svg'

import React, { useContext } from "react";
import PersonalDetailsContext from "./PersonalDetailsContext";

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
      <div className="border-b border-black mb-4 pb-4">
        <label htmlFor="personalDetails" className="block">
          Enter personal details{" "}
          <span
            onClick={() => toggleSection("personalDetails")}
            className="cursor-pointer"
          >
            <img src={LeftArrow} alt="left arrow" />
          </span>
        </label>
        {showSections.personalDetails && (
          <div>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div className="mb-2 md:mb-0 md:mr-4">
                <label htmlFor="username" className="block">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="border p-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block">
                  Phone Number:
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="border p-2 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div className="mb-2 md:mb-0 md:mr-4">
                <label htmlFor="email" className="block">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="gender" className="block">
                  Gender:
                </label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border p-2 w-full"
                />
              </div>
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={() => handleSave("personalDetails")}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-b border-black mb-4 pb-4">
        <label htmlFor="aboutMe" className="block">
          About Me{" "}
          <span
            onClick={() => toggleSection("aboutMe")}
            className="cursor-pointer"
          >
            ↓
          </span>
        </label>
        {showSections.aboutMe && (
          <div>
            <textarea
              id="aboutMe"
              name="aboutMe"
              value={formData.aboutMe}
              onChange={handleChange}
              className="border p-2 w-full mb-4"
            />
            <div className="text-right">
              <button
                type="button"
                onClick={() => handleSave("aboutMe")}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-b border-black mb-4 pb-4">
        <label htmlFor="workEducation" className="block">
          Work/Education{" "}
          <span
            onClick={() => toggleSection("workEducation")}
            className="cursor-pointer"
          >
            ↓
          </span>
        </label>
        {showSections.workEducation && (
          <div>
            <textarea
              id="workEducation"
              name="workEducation"
              value={formData.workEducation}
              onChange={handleChange}
              className="border p-2 w-full mb-4"
            />
            <div className="text-right">
              <button
                type="button"
                onClick={() => handleSave("workEducation")}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-b border-black mb-4 pb-4">
        <label htmlFor="skills" className="block">
          Skills{" "}
          <span
            onClick={() => toggleSection("skills")}
            className="cursor-pointer"
          >
            ↓
          </span>
        </label>
        {showSections.skills && (
          <div>
            <textarea
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="border p-2 w-full mb-4"
            />
            <div className="text-right">
              <button
                type="button"
                onClick={() => handleSave("skills")}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="text-right">
        <button
          type="button"
          onClick={handleFinish}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;