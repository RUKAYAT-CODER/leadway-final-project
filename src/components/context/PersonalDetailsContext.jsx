import React, { createContext, useState } from 'react';

const PersonalDetailsContext = createContext();

export const PersonalDetailsProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    email: '',
    gender: '',
    aboutMe: '',
    workEducation: '',
    skills: ''
  });

  const [showSections, setShowSections] = useState({
    personalDetails: false,
    aboutMe: false,
    workEducation: false,
    skills: false
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
      [name]: value
    }));
  };

  const handleSave = (section) => {
    localStorage.setItem(section, JSON.stringify(formData[section]));
    alert(`${section} details saved locally!`);
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