
import React, { useState } from 'react';
import { 
  FiPlus, 
  FiUpload, 
  FiArrowRight, 
  FiTrash2 
} from 'react-icons/fi';

const Events = () => {
  const [speakerCount, setSpeakerCount] = useState(1);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [designationImage, setDesignationImage] = useState(null);
  const [eventStatus, setEventStatus] = useState('Confirmed');

  const handleAddSpeaker = () => {
    setSpeakerCount(prevCount => prevCount + 1);
  };

  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files) {
      const imagesArray = Array.from(files).map(file => ({
        id: `${file.name}-${file.size}-${file.lastModified}`,
        name: file.name,
        file: file,
        preview: URL.createObjectURL(file),
      }));
      setUploadedImages(prevImages => [...prevImages, ...imagesArray]);
    }
  };

  // Handle removal of event images
  // const handleRemoveImage = (id) => {
  //   setUploadedImages(prevImages => prevImages.filter(image => image.id !== id));
  // };

  // Handle designation image upload
  const handleDesignationImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDesignationImage({
        id: `${file.name}-${file.size}-${file.lastModified}`,
        name: file.name,
        file: file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  // Handle removal of designation image
  const handleRemoveDesignationImage = () => {
    setDesignationImage(null);
  };

  // Handle event status change
  const handleEventStatusChange = (event) => {
    setEventStatus(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here
    console.log('Form Submitted');
  };

  const handleFileInputClick = () => {
    document.getElementById('eventImageInput').click();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Create Events</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
          <div className="flex-1">
            <label htmlFor="eventTitle" className="block text-gray-700 font-medium mb-2">Event Title</label>
            <input 
              type="text" 
              id="eventTitle" 
              name="eventTitle" 
              placeholder="Enter Event Title" 
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        
          <div className="flex-1">
            <label htmlFor="speakerName" className="block text-gray-700 font-medium mb-2">Speaker Name</label>
            <input 
              type="text" 
              id="speakerName" 
              name="speakerName" 
              placeholder="Enter Speaker Name" 
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
          <div className="flex-1 mb-6 md:mb-0">
            <label htmlFor="eventDetails" className="block text-gray-700 font-medium mb-2">Event Details</label>
            <textarea 
              id="eventDetails" 
              name="eventDetails" 
              placeholder="Enter Event Details" 
              className="w-full border border-gray-300 rounded px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
          </div>
          
          <div className="flex-1">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter Email Address" 
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="phoneNumber" 
                name="phoneNumber" 
                placeholder="Enter Phone Number" 
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
          <div className="flex-1 mb-6 md:mb-0">
            <label className="block text-gray-700 font-medium mb-2">Add Image</label>
            <div className="flex space-x-4">
              <div className="w-32 h-32 border border-gray-300 rounded flex items-center justify-center">
                {uploadedImages[0] ? (
                  <img src={uploadedImages[0].preview} alt={uploadedImages[0].name} className="w-full h-full object-cover rounded" />
                ) : (
                  <FiUpload className="text-gray-400" size={24} />
                )}
              </div>
              
              {/* Image Box 2 */}
              <div className="w-32 h-32 border border-gray-300 rounded flex items-center justify-center">
                {uploadedImages[1] ? (
                  <img src={uploadedImages[1].preview} alt={uploadedImages[1].name} className="w-full h-full object-cover rounded" />
                ) : (
                  <FiUpload className="text-gray-400" size={24} />
                )}
              </div>
              
              {/* Add Image Box */}
              <div 
                onClick={handleFileInputClick} 
                className="w-32 h-32 border border-gray-300 rounded flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100"
              >
                <FiPlus className="text-gray-400 mb-1" size={24} />
                <span className="text-gray-600 text-sm">Add image</span>
              </div>
            </div>
            
            {/* Hidden File Input */}
            <input 
              type="file" 
              id="eventImageInput" 
              accept="image/*" 
              multiple 
              onChange={handleImageUpload} 
              className="hidden" 
            />
          </div>
          
          {/* Right Side: Designation and Upload Image */}
          <div className="flex-1">
            {/* Designation */}
            <div className="mb-4">
              <label htmlFor="designation" className="block text-gray-700 font-medium mb-2">Designation</label>
              <input 
                type="text" 
                id="designation" 
                name="designation" 
                placeholder="Enter Designation" 
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            
            {/* Upload Image */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Upload Image [200x200px]</label>
              <div className="flex items-center">
                {/* Choose File Button */}
                <button 
                  type="button" 
                  onClick={() => document.getElementById('designationImageInput').click()} 
                  className="flex items-center bg-green-500 text-white px-4 py-2 rounded mr-4 hover:bg-green-600 transition-colors"
                >
                  Choose File
                </button>
                
                {/* Display Selected File */}
                <span className="text-gray-500">
                  {designationImage ? designationImage.name : "No files chosen"}
                </span>
                
                {/* Hidden File Input */}
                <input 
                  type="file" 
                  id="designationImageInput" 
                  accept="image/*" 
                  onChange={handleDesignationImageUpload} 
                  className="hidden" 
                />
              </div>
              
              {/* Display Selected Designation Image */}
              {designationImage && (
                <div className="mt-2 flex items-center">
                  <img src={designationImage.preview} alt={designationImage.name} className="w-16 h-16 object-cover rounded mr-4" />
                  <button 
                    type="button" 
                    onClick={handleRemoveDesignationImage} 
                    className="flex items-center text-red-500"
                  >
                    <FiTrash2 className="mr-1" /> Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Row 4: Date, Time and Add More Speakers */}
        <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
          {/* Left Side: Date and Time */}
          <div className="flex-1 mb-6 md:mb-0">
            <label htmlFor="dateTime" className="block text-gray-700 font-medium mb-2">Date, Time</label>
            <input 
              type="datetime-local" 
              id="dateTime" 
              name="dateTime" 
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          
          {/* Right Side: Add More Speakers Button */}
          <div className="flex items-end">
            <button 
              type="button" 
              onClick={handleAddSpeaker} 
              className="flex items-center bg-[#006d3e] text-white px-4 py-2 rounded hover:bg-[#018847] transition-colors"
            >
              <FiPlus className="mr-1" /> Add more speakers
            </button>
          </div>
        </div>
        
        {Array.from({ length: speakerCount }).map((_, index) => (
          <div key={index} className="flex flex-col md:flex-row md:space-x-4 mb-6">
            {/* Speaker Name */}
            <div className="flex-1 mb-4 md:mb-0">
              <label htmlFor={`speakerName${index}`} className="block text-gray-700 font-medium mb-2">Speaker Name</label>
              <input 
                type="text" 
                id={`speakerName${index}`} 
                name={`speakerName${index}`} 
                placeholder={`Enter Speaker ${index + 1} Name`} 
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            
            {/* Speaker Designation */}
            <div className="flex-1">
              <label htmlFor={`speakerDesignation${index}`} className="block text-gray-700 font-medium mb-2">Designation</label>
              <input 
                type="text" 
                id={`speakerDesignation${index}`} 
                name={`speakerDesignation${index}`} 
                placeholder={`Enter Speaker ${index + 1} Designation`} 
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>
        ))}
        
        {/* Row 5: Venue/Address and Create Event Button */}
        <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
          {/* Left Side: Venue/Address */}
          <div className="flex-1 mb-6 md:mb-0">
            <label htmlFor="venueAddress" className="block text-gray-700 font-medium mb-2">Venue/Address</label>
            <input 
              type="text" 
              id="venueAddress" 
              name="venueAddress" 
              placeholder="Enter Venue or Address" 
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          
          {/* Right Side: Create Event Button */}
          <div className="flex items-end">
            <button 
              type="submit" 
              className="flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              Create Event <FiArrowRight className="ml-2" />
            </button>
          </div>
        </div>
        
        {/* Row 6: Event Type, Total Seats, Ticket Price, and Event Status */}
        <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
          {/* Left Side: Event Type and Total Seats */}
          <div className="flex-1 mb-6 md:mb-0">
            {/* Event Type */}
            <div className="mb-4">
              <label htmlFor="eventType" className="block text-gray-700 font-medium mb-2">Event Type</label>
              <input 
                type="text" 
                id="eventType" 
                name="eventType" 
                placeholder="e.g., Workshop, Seminar" 
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="totalSeats" className="block text-gray-700 font-medium mb-2">Total Seats</label>
              <input 
                type="number" 
                id="totalSeats" 
                name="totalSeats" 
                placeholder="Enter Total Number of Seats" 
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                min="1"
                required
              />
            </div>
          </div>
          
          {/* Right Side: Ticket Price and Event Status */}
          <div className="flex-1">
            {/* Ticket Price */}
            <div className="mb-4">
              <label htmlFor="ticketPrice" className="block text-gray-700 font-medium mb-2">Ticket Price</label>
              <input 
                type="number" 
                id="ticketPrice" 
                name="ticketPrice" 
                placeholder="Enter Ticket Price" 
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                min="0"
                required
              />
            </div>
            
            {/* Event Status */}
            <div>
              <label htmlFor="eventStatus" className="block text-gray-700 font-medium mb-2">Event Status</label>
              <div className="relative">
                <select 
                  id="eventStatus" 
                  name="eventStatus" 
                  value={eventStatus}
                  onChange={handleEventStatusChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="Confirmed">Confirmed</option>
                  <option value="Pending">Pending</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FiArrowRight className="text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </form>
    </div>
  );
};

export default Events;
