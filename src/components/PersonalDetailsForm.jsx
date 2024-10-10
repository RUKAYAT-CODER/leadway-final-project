import LeftArrow from '../assets/arrow-left.svg'
import React, { useContext } from "react";
import PersonalDetailsContext from "./context/PersonalDetailsContext"
import ProfileLady from '../assets/profile-pix-lady.svg'

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
      <div className="flex gap-3 mb-4 items-center">
        <div>
          <img src={ProfileLady} alt="user" className="w-14" />
        </div>
        <div>
          <p className="font-bold">Profile</p>
          <p>Update your photo and Personal data</p>
        </div>
      </div>
      <div className="border-b border-x-stone-500 mb-4 pb-4">
        <label
          htmlFor="personalDetails"
          className="flex items-center justify-between font-bold mb-3 shadow-md  rounded-lg p-2 max-w-[800px]  mx-auto"
        >
          Personal Information
          <span
            onClick={() => toggleSection("personalDetails")}
            className="cursor-pointer"
          >
            <img src={LeftArrow} alt="left arrow" className="w-4" />
          </span>
        </label>
        {showSections.personalDetails && (
          <div>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div className="mb-2 md:mb-0 md:mr-4 ">
                <label
                  htmlFor="username"
                  className="flex items-center justify-between"
                >
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-md outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="flex items-center justify-between"
                >
                  Phone Number:
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-md outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div className="mb-2 md:mb-0 md:mr-4">
                <label
                  htmlFor="email"
                  className="flex items-center justify-between"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-md outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="flex items-center justify-between"
                >
                  Gender:
                </label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-md outline-none"
                />
              </div>
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={() => handleSave("personalDetails")}
                className="bg-[#006d3e] text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-b border-x-stone-500 mb-4 pb-4">
        <label
          htmlFor="aboutMe"
          className="flex items-center justify-between font-bold mb-3 shadow-md  rounded-lg p-2 max-w-[800px]  mx-auto"
        >
          About Me
          <span
            onClick={() => toggleSection("aboutMe")}
            className="cursor-pointer"
          >
            <img src={LeftArrow} alt="left arrow" className="w-4" />
          </span>
        </label>
        {showSections.aboutMe && (
          <div>
            <textarea
              id="aboutMe"
              name="aboutMe"
              value={formData.aboutMe}
              onChange={handleChange}
              className="border p-2 w-full mb-4 rounded-md outline-none"
            />
            <div className="mb-2 md:mb-0 md:mr-4">
              <label htmlFor="interest" className="block">
                Interest:
              </label>
              <input
                type="interest"
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="border p-2 w-full rounded-md outline-none"
              />
            </div>
            <div className="mb-2 md:mb-0 md:mr-4">
              <label htmlFor="goals" className="block">
                Goals:
              </label>
              <input
                type="goals"
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                className="border p-2 w-full rounded-md outline-none mb-4"
              />
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={() => handleSave("aboutMe")}
                className="bg-[#006d3e] text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-b border-x-stone-500 mb-4 pb-4">
        <label
          htmlFor="workEducation"
          className="flex items-center justify-between font-bold mb-3 shadow-md  rounded-lg p-2 max-w-[800px]  mx-auto"
        >
          Work/Education{" "}
          <span
            onClick={() => toggleSection("workEducation")}
            className="cursor-pointer"
          >
            <img src={LeftArrow} alt="left arrow" className="w-4" />
          </span>
        </label>
        {showSections.workEducation && (
          <div>
            <textarea
              id="workEducation"
              name="workEducation"
              value={formData.workEducation}
              onChange={handleChange}
              className="border p-2 w-full mb-4 rounded-md outline-none"
            />
            <div className="mb-2 md:mb-0 md:mr-4">
              <label
                htmlFor="educationalbackground"
                className="flex items-center justify-between font-bold"
              >
                Educational Background
              </label>
              <input
                type="educationalbackground"
                id="educationalbackground"
                name="educationalbackground"
                value={formData.educationalbackground}
                onChange={handleChange}
                className="border p-2 w-full mb-4 rounded-md outline-none"
              />
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={() => handleSave("workEducation")}
                className="bg-[#006d3e] text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-b border-x-stone-500 mb-4 pb-4">
        <label
          htmlFor="skills"
          className="flex items-center justify-between font-bold mb-3 shadow-md  rounded-lg p-2 max-w-[800px]  mx-auto"
        >
          Skills{" "}
          <span
            onClick={() => toggleSection("skills")}
            className="cursor-pointer"
          >
            <img src={LeftArrow} alt="left arrow" className="w-4" />
          </span>
        </label>
        {showSections.skills && (
          <div>
            <textarea
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="border p-2 w-full mb-4 rounded-md outline-none"
            />
            <div className="text-right">
              <button
                type="button"
                onClick={() => handleSave("skills")}
                className="bg-[#006d3e] text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-b border-x-stone-500 mb-4 pb-4">
        <label
          htmlFor="socialmedia"
          className="flex items-center justify-between font-bold mb-3 shadow-md  rounded-lg p-2 max-w-[800px]  mx-auto"
        >
          Social Media
          <span
            onClick={() => toggleSection("socialmedia")}
            className="cursor-pointer"
          >
            <img src={LeftArrow} alt="left arrow" className="w-4" />
          </span>
        </label>
        {showSections.socialmedia && (
          <div>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div className="mb-2 md:mb-0 md:mr-4">
                <label htmlFor="linkdin" className="block">
                  Linkdin:
                </label>
                <input
                  type="text"
                  id="linkdin"
                  name="linkdin"
                  value={formData.linkdin}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-md outline-none"
                />
              </div>
              <div>
                <label htmlFor="twitter" className="block">
                  Twitter:
                </label>
                <input
                  type="text"
                  id="twitter"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-md outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div className="mb-2 md:mb-0 md:mr-4">
                <label htmlFor="instagram" className="block">
                  Instagram:
                </label>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-md outline-none"
                />
              </div>
              <div>
                <label htmlFor="facebook" className="block">
                  Facebook:
                </label>
                <input
                  type="text"
                  id="facebook"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-md outline-none"
                />
              </div>
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={() => handleSave("skills")}
                className="bg-[#006d3e] text-white px-4 py-2 rounded"
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