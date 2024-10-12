import React from 'react'
import { useParams } from 'react-router-dom';
import SamuelGold from "../assets/picture1.svg";
import TomiwaSmith from "../assets/picture2.svg";
import IsahFareda from "../assets/picture3.svg";
import IsahFarda from "../assets/picture4.svg";
import IsahFareeda from "../assets/picture5.svg";


export const ProfilePage = () => {
  const {userId} = useParams()
  console.log(userId)
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
      <div className='flex flex-col gap-2 max-w-[500px] bg-slate-800 text-white'>
        <h1>Welcome !</h1>
        <div>{ user.image}</div>
        <h1>{user.name}</h1>
        <p>{user.title}</p>
        <p>{user.email}</p>
        <p>{user.address}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
