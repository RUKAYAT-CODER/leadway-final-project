import React from 'react'
import { useParams } from 'react-router-dom';
import SamuelGold from "../assets/picture1.svg";
import TomiwaSmith from "../assets/picture2.svg";
import IsahFareda from "../assets/picture3.svg";
import IsahFarda from "../assets/picture4.svg";
import IsahFareeda from "../assets/picture5.svg";
import { useNavigate } from "react-router-dom";


export const ProfilePage = () => {
  const {userId} = useParams()
  console.log(userId)
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/directory");
  };
  const users = [
    {
      id: 1,
      image: SamuelGold,
      name: "Samuel Gold",
      title: "Data Scintist",
      email:"abc@gmail.com",
      address:"Kaduna"
    },
    {
      id: 2,
      image: TomiwaSmith,
      name: "Tomiwa Smith",
      title: "Data Scintist",
       email:"tomwa@gmail.com",
      address:"Lagos"
    },
    {
      id: 3,
      image: IsahFareeda,
      name: "Isah Faredah",
      title: "Data Scintist",
      email:"aisah@gmail.com",
      address:"Kano"
    },

    {
      id: 4,
      image: SamuelGold,
      name: "Samuel Gold",
      title: "Data Scintist",
      email:"samu@gmail.com",
      address:"Abia"
    },
    { id: 5, image: IsahFarda, name: "Tomiwa Smith", title: "Data Scintist", email:"far@gmail.com",
      address:"Kaduna" },

    {
      id: 6,
      image: IsahFarda,
      name: "Hameed Salmot",
      title: "Data Scintist",
       email:"fff@gmail.com",
      address:"Kwara"
    },
    {
      id: 7,
      image: SamuelGold,
      name: "Samuel Gold",
      title: "Data Scintist",
       email:"gold@gmail.com",
      address:"Ibadan"
    },
    {
      id: 8,
      image: TomiwaSmith,
      name: "Tomiwa Smith",
      title: "Data Scintist",
       email:"smith@gmail.com",
      address:"Lagos"
    },
    {
      id: 9,
      image: IsahFareda,
      name: "Isah Faredah",
      title: "Data Scintist",
       email:"farey@gmail.com",
      address:"Kwara"
    },

    {
      id:10,
      image: SamuelGold,
      name: "Samuel Gold",
      title: "Data Scintist",
       email:"xyz@gmail.com",
      address:"Imo"
    },
  ];
  const user = users.find(user =>user.id ===parseInt(userId))

  if (!user)
    return <div>Users does not exist</div>
  
  return (
    <div className="">
      <div className="flex flex-col mx-auto items-center justify-center mt-4 gap-2 max-w-[500px] bg-lime-800 drop-shadow-md rounded text-white">
        <h1 classname="font-bold text-[36px] m-4">Welcome ! {user.name}</h1>
        <div>
          <img src={user.image} alt="user" />
        </div>
        <h1 className="font-bold text-[20px] m-3">Name: {user.name}</h1>
        <p className="font-bold">Title: {user.title}</p>
        <p className="font-bold m-2">Email: {user.email}</p>
        <p className="font-bold mb-4">Address: {user.address}</p>
        <button
          onClick={handleNavigate}
          className="button bg-[#01884F] text-white text-[18px] font-bold py-4 rounded-lg mt-7 mb-20"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
