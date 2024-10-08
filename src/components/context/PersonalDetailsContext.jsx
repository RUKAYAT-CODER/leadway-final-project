import React, { createContext, useState } from 'react';

const PersonalDetailsContext = createContext();

export const PersonalDetailsProvider = ({ children }) => {
  const bioData = {
    username: "",
    phoneNumber: "",
    email: "",
    gender: "",
    aboutMe: "",
    workEducation: "",
    skills: "",
    interest: "",
    gaols: "",
    twitter: "",
    facebook: "",
    linkdin: "",
    instagram: "",
    educationalbackground: "",
  };
  const [formData, setFormData] = useState(bioData);

  const [showSections, setShowSections] = useState({
    personalDetails: false,
    aboutMe: false,
    workEducation: false,
    skills: false,
    socialmedia:false,
  });

  const toggleSection = (section) => {
    setShowSections((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    
    }));
  };

  const handleSave = (section) => {
    localStorage.setItem(section, JSON.stringify(formData[section]));
    alert(`${section} details saved locally!`);
    setFormData({
      username: "",
      phoneNumber: "",
      email: "",
      gender: "",
    });
  };

  const handleFinish = () => {
    alert('All details saved and form completed!');
  };

  return (
    <PersonalDetailsContext.Provider value={{ formData, showSections, toggleSection, handleChange, handleSave, handleFinish }}>
      {children}
    </PersonalDetailsContext.Provider>
  );
};

export default PersonalDetailsContext;