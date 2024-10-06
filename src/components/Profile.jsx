import React from 'react'
import ProfilePix from '../assets/profile-pix-lady.svg'

const Profile = ({img, title, text}) => {
  return (
    <div>
      <div>
        <div>
          <img src={ProfilePix} alt="profile-picture" />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
      
      
    </div>
  )
}

export default Profile
