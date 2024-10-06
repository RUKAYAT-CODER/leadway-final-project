import React from 'react'
import ProfilePix from '../assets/profile-pix-lady.svg'
import useState from 'react'

const Profile = ({img, title, text}) => {
  return (
    <div>
      <div>
        <div>
          <img src={img} alt="profile-picture" />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
      // For the forms inputs and data
      
      
    </div>
  )
}

export default Profile
