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
    {
      image: IsahSalmot,
      name: "Hameed Salmot",
      title: "2018 Fellow",
    },
  ];
  return (
    <div className="">
      {users.map((user, index) => (
        <div key={index} className="flex my-2">
          <img src={user.image} alt="user-img" className="" />
          <div className='ml-2'>
            <p className="text-[12px]">{user.name}</p>
            <span className="text-[10px]">{user.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
