import React from "react";
import IsahFareeda from "../../assets/isahFareda.svg";
import IsahSalmot from "../../assets/hamedSalmot.svg";
import AliyuHassan from "../../assets/aliuHassan.svg";

export const Users = () => {
  const users = [
    {
      image: AliyuHassan,
      name: "Aliu Hassan",
      title: "2018 Fellow",
    },
    {
      image: IsahFareeda,
      name: "Isah Faredah",
      title: "2018 Fellow",
    },
    {
      image: IsahFareeda,
      name: "Isah Faredah",
      title: "2018 Fellow",
    },
    {
      image: IsahSalmot,
      name: "Hameed Salmot",
      title: "2018 Fellow",
    },
    {
      image: IsahFareeda,
      name: "Isah Faredah",
      title: "2018 Fellow",
    },
  
    {
      image: IsahSalmot,
      name: "Hameed Salmot",
      title: "2018 Fellow",
    },
    {
      image: IsahSalmot,
      name: "Hameed Salmot",
      title: "2018 Fellow",
    },
  ];
  return (
    <div className="">
      {users.map((user, index) => (
        <div key={index} className="flex items-center">
          <img src={user.image} alt="user-img" className="pb-1" />
          <div className=' flex flex-col items-center ml-2'>
            <span className="text-[10px]">{user.name}</span>
            <span className="text-[8px]">{user.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
