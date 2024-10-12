import React from "react";
import SamuelGold from "../assets/picture1.svg";
import TomiwaSmith from "../assets/picture2.svg";
import IsahFareda from "../assets/picture3.svg";
import IsahFarda from "../assets/picture4.svg";
import IsahFareeda from "../assets/picture5.svg";
import Filter from "../assets/Filter.svg";
import Search from "../components/Search";
import { Link } from "react-router-dom";

export const Directory = () => {
  const users = [
    {
      id: 1,
      image: SamuelGold,
      name: "Samuel Gold",
      title: "Data Scintist",
      email: "abc@gmail.com",
      address: "Kaduna",
      link: "path:/profilePage",
    },
    {
      id: 2,
      image: TomiwaSmith,
      name: "Tomiwa Smith",
      title: "Data Scintist",
      email: "tomwa@gmail.com",
      address: "Lagos",
      link: "path:/profilePage",
    },
    {
      id: 3,
      image: IsahFareeda,
      name: "Isah Faredah",
      title: "Data Scintist",
      email: "aisah@gmail.com",
      address: "Kano",
      link: "path:/profilePage",
    },

    {
      id: 4,
      image: SamuelGold,
      name: "Samuel Gold",
      title: "Data Scintist",
      email: "samu@gmail.com",
      address: "Abia",
      link: "path:/profilePage",
    },
    {
      id: 5,
      image: IsahFarda,
      name: "Tomiwa Smith",
      title: "Data Scintist",
      email: "far@gmail.com",
      address: "Kaduna",
      link: "path:/profilePage",
    },

    {
      id: 6,
      image: IsahFarda,
      name: "Hameed Salmot",
      title: "Data Scintist",
      email: "fff@gmail.com",
      address: "Kwara",
      link: "path:/profilePage",
    },
    {
      id: 7,
      image: SamuelGold,
      name: "Samuel Gold",
      title: "Data Scintist",
      email: "gold@gmail.com",
      address: "Ibadan",
      link: "path:/profilePage",
    },
    {
      id: 8,
      image: TomiwaSmith,
      name: "Tomiwa Smith",
      title: "Data Scintist",
      email: "smith@gmail.com",
      address: "Lagos",
      link: "path:/profilePage",
    },
    {
      id: 9,
      image: IsahFareda,
      name: "Isah Faredah",
      title: "Data Scintist",
      email: "farey@gmail.com",
      address: "Kwara",
      link: "path:/profilePage",
    },

    {
      id: 10,
      image: SamuelGold,
      name: "Samuel Gold",
      title: "Data Scintist",
      email: "xyz@gmail.com",
      address: "Imo",
      link: "path:/profilePage/",
    },
  ];
  return (
    <div className="bg-[#bcf8b4] w-full">
      <div className="flex items-center justify-between my-3">
        <div className="flex items-left flex-col gap-1">
          <p className="text-[24px] font-bold">Alumini</p>
          <span className="text-[#989797] text-[20px]">
            Check out Past Fellows
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Search />
          <img src={Filter} alt="filter icon" />
        </div>
      </div>

      <div className="grid m-1 gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        {users.map((user, id) => (
          <div
            key={id}
            className="flex flex-col items-center bg-white rounded-md shadow-lg my-8 w-full"
          >
            <img src={user.image} alt="user-img" className="my-3 w-10 h-10" />
            <div className=" flex flex-col items-center gap-1">
              <span className="text-[14px]">{user.name}</span>
              <span className="text-[14px]">{user.title}</span>

              <Link
                to={`/directory/profilePage/${user.id}`}
                className="text-[14px] text-white bg-[#aff6a5] hover:bg-[rgb(0,109,62)] border-none rounded-md px-2 py-1 mb-3"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directory;
