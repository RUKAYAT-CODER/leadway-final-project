// src/pages/PostJobsPage.jsx

import React, { useState } from 'react';
import { 
  FiFile, 
  FiEdit, 
  FiTrash2, 
  FiPlus, 
  FiUpload, 
  FiArrowRight 
} from 'react-icons/fi';

const Jobs = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Handle adding files via input
  const handleAddFile = (event) => {
    const files = event.target.files;
    if (files) {
      const filesArray = Array.from(files).map(file => ({
        id: `${file.name}-${file.size}-${file.lastModified}`,
        name: file.name,
        size: file.size,
        file: file,
        preview: URL.createObjectURL(file),
      }));
      setUploadedFiles(prevFiles => [...prevFiles, ...filesArray]);
    }
  };

  // Handle drag over
  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  // Handle drop
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    if (files) {
      const filesArray = Array.from(files).map(file => ({
        id: `${file.name}-${file.size}-${file.lastModified}`,
        name: file.name,
        size: file.size,
        file: file,
        preview: URL.createObjectURL(file),
      }));
      setUploadedFiles(prevFiles => [...prevFiles, ...filesArray]);
    }
  };

  // Handle file removal
  const handleRemoveFile = (id) => {
    setUploadedFiles(prevFiles => prevFiles.filter(file => file.id !== id));
  };

  // Handle file editing (renaming)
  const handleEditFile = (id) => {
    const newName = prompt("Enter new file name:", "");
    if (newName && newName.trim() !== "") {
      setUploadedFiles(prevFiles => 
        prevFiles.map(file => 
          file.id === id ? { ...file, name: newName } : file
        )
      );
    }
  };

  // Handle upload (simulate)
  const handleUpload = () => {
    if (uploadedFiles.length === 0) {
      alert("No files to upload.");
      return;
    }
    
    // Simulate upload process
    alert(`Uploading ${uploadedFiles.length} file(s)...`);
    
    // After upload, clear the uploaded files
    setUploadedFiles([]);
  };

  // Handle file input click
  const handleFileInputClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Post Jobs</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form>
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <div className="flex flex-col mb-4 md:mb-0 md:w-1/2">
              <label htmlFor="title" className="mb-2 font-medium">
                Title
              </label>
            </div>
            <div className="flex flex-col md:w-1/2">
              <label htmlFor="experience" className="mb-2 font-medium">
                Experience
              </label>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
            <div className="flex flex-col mb-4 md:mb-0 md:w-1/2">
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Job Title"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#006d3e]"
              />
            </div>
            <div className="flex flex-col md:w-1/2">
              <div className="relative">
                <select
                  id="experience"
                  name="experience"
                  defaultValue="0 years"
                  className="border border-gray-300 rounded px-3 py-2 w-full appearance-none focus:outline-none focus:ring-2 focus:ring-[#006d3e]"
                >
                  <option>0 years</option>
                  <option>1 year</option>
                  <option>2 years</option>
                  <option>3 years</option>
                  <option>4 years</option>
                  <option>5+ years</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FiArrowRight className="text-gray-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Description */}
          <div className="flex flex-col mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <textarea
              id="description"
              name="description"
              placeholder="Job Description"
              className="border border-gray-300 rounded px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-[#006d3e]"
            ></textarea>
          </div>

          {/* Row 3: Location, Renumeration, Duration */}
          <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
            {/* Location */}
            <div className="flex flex-col mb-4 md:mb-0 md:w-1/3">
              <label htmlFor="location" className="mb-2 font-medium">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="e.g., Lagos, Nigeria"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#006d3e]"
              />
            </div>

            {/* Renumeration */}
            <div className="flex flex-col mb-4 md:mb-0 md:w-1/3">
              <label htmlFor="renumeration" className="mb-2 font-medium">
                Renumeration
              </label>
              <input
                type="text"
                id="renumeration"
                name="renumeration"
                placeholder="e.g., ₦200,000 - ₦300,000"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#006d3e]"
              />
            </div>

            {/* Duration */}
            <div className="flex flex-col md:w-1/3">
              <label htmlFor="duration" className="mb-2 font-medium">
                Duration
              </label>
              <input
                type="text"
                id="duration"
                name="duration"
                placeholder="e.g., 6 months"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#006d3e]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#006d3e] text-white font-semibold py-2 px-4 rounded hover:bg-[#00532c] transition-colors mt-4"
          >
            Post Job
          </button>
        </form>
      </div>

      {/* Upload Attachment Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Upload Attachment</h2>

        {/* Uploaded Files */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          {uploadedFiles.length > 0 ? (
            uploadedFiles.map((file) => (
              <div key={file.id} className="flex items-center mb-2">
                <FiFile className="text-gray-500 mr-2" size={20} />
                <span className="mr-4">{file.name}</span>
                <button
                  onClick={() => handleEditFile(file.id)}
                  className="text-green-500 mr-2 flex items-center"
                >
                  <FiEdit className="mr-1" /> Edit
                </button>
                <button
                  onClick={() => handleRemoveFile(file.id)}
                  className="text-red-500 flex items-center"
                >
                  <FiTrash2 className="mr-1" /> Remove
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No files uploaded.</p>
          )}

          {/* Add File Button */}
          <button
            onClick={handleFileInputClick}
            className="flex items-center bg-[#006d3e] text-white py-2 px-4 rounded hover:bg-[#00532c] transition-colors mt-2"
          >
            <FiPlus className="mr-1" /> Add file
          </button>

          {/* Hidden File Input */}
          <input
            type="file"
            id="fileInput"
            multiple
            onChange={handleAddFile}
            className="hidden"
          />
        </div>

        {/* Dotted Box for Drag and Drop */}
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 relative mb-4"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <FiUpload className="mx-auto mb-2 text-gray-400" size={30} />
          <p className="text-gray-500 text-center">
            You can drop your files here.
          </p>
        </div>

        {/* Upload Button Outside the Dotted Box */}
        <button
          onClick={handleUpload}
          className="flex items-center bg-[#006d3e] text-white py-2 px-4 rounded hover:bg-[#00532c] transition-colors"
        >
          Upload <FiArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Jobs;
