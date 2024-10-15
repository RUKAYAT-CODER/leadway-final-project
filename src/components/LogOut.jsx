import React from 'react'
import {useNavigate} from 'react-router-dom'

const LogOut = ( ) =>{
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }
   const handleCancel= () => {
    navigate(-1)
  }

  return (
    <div className="flex items-center justify-center bg-white rounded-lg shadow-md border p-4">
      <div className='flex flex-col items-center justify-center'>
        <h2 className="text-[#006d3e] font-bold text-center my-3">Log Out</h2>
        <p>
          Are you sure you want to <span className="font-bold">Log Out</span>{" "}
          from this page.
        </p>
        <div>
          <button
            onClick={handleNavigate}
            className="button bg-[#01884F] text-white text-[18px] mr-4 font-bold py-4 px-3 rounded-lg mt-7 mb-20"
          >
            Log out
          </button>
          <button
            onClick={handleCancel}
            className="button bg-white text-[#006d3e] text-[18px] font-bold py-4 px-3 rounded-lg mt-7 mb-20 border"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default LogOut