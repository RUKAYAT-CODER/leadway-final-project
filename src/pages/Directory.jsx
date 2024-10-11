import React from "react";
import SamuelGold from "../../assets/picture1.svg";
import TomiwaSmith from "../../assets/picture2.svg";
import IsahFareeda from "../../assets/picture3.svg";
import IsahFareeda from "../../assets/picture4.svg";
import IsahFareeda from "../../assets/picture5.svg";
import Filter from "../../assets/filter.svg";

export const Directory = () => {
  const users = [
    {
      image: SamuelGold,
      name: "Samuel Gold",
      title: "Data Scintist",
    },
    {
      image: TomiwaSmith,
      name: "Tomiwa Smith",
      title: "Data Scintist",
    },
    {
      image: IsahFareeda,
      name: "Isah Faredah",
      title: "Data Scintist",
    },

    {
      image: SamuelGold,
      name: "Samuel Gold",
      title: "Data Scintist",
    },
    {
      image: TomiwaSmith,
      name: "Tomiwa Smith",
      title: "Data Scintist",
    },

    {
      image: IsahSalmot,
      name: "Hameed Salmot",
      title: "Data Scintist",
    },
    {
      image: SamuelGold,
      name: "Samuel Gold",
      title: "Data Scintist",
    },
    {
      image: TomiwaSmith,
      name: "Tomiwa Smith",
      title: "Data Scintist",
    },
    {
      image: IsahFareeda,
      name: "Isah Faredah",
      title: "Data Scintist",
    },

    {
      image: SamuelGold,
      name: "Samuel Gold",
      title: "Data Scintist",
    },
  ];
  return (
    <div className="bg-[#bcf8b4] ml-4 mr-8">
      <div className="flex items-center justify-between my-6">
        <div className="flex items-center flex-col gap-2">
          <p className="text-[24px] font-bold">Alumini</p>
          <span className="text-[#989797] text-[24px]">Check out past felllows</span>
        </div>
        <div className="flex items-center gap-3">
          <Search />
          <img src={Filter} alt="filter icon" />
        </div>
        
      </div>
      {users.map((user, index) => (
        <div key={index} className="flex flex-col items-center bg-white rounded-md shadow-lg my-3">
          <img src={user.image} alt="user-img" className="mb-3" />
          <div className=' flex flex-col items-center gap-2'>
            <span className="text-[16px]">{user.name}</span>
            <button className="text-[16px] text-white bg-[#01884f] hover:bg-[#006d3e] border-none rounded-md">{user.title}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Directory;
