import React from "react";
import CreateNewButton from "../components/CreateNewButton";
import OverViewCard from "../components/OverViewCard";
import userGreen from "../assets/user-icon-green.svg";
import Delete from "../assets/delete.svg";
import Edit from "../assets/edit_square.svg";
import userCyan from "../assets/user-icon-on card-cyan.svg";
import PostCard from "../components/PostCard";
import ThreeDots from "../assets/three-dot-icon.svg";
import Users from "../pages/user/Users";
import EventsComponent from "../components/EventsComponent";
import CalendarUi from "../ui/CalendarUi";
import Threedots from "../assets/three-dot-icon.svg";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handledashboardCreation = () => {
    navigate("/NewDashboard");
  };

  return (
    <div className="">
      <div className=" my-4">
        <h3 className="bg-[#eeffd2] rounded-lg text-[#476806] p-1 m-3 w-[380px]">
          Welcome to Teach for Nigeria Alumini Dashboard!
        </h3>
      </div>
      {/* cards heading */}
      <section className="flex justify-between">
        <h3 className="text-[20px] lg:text-[28px] font-bold m-3">Overview</h3>

        <CreateNewButton
          onClick={handledashboardCreation}
          backgroundColor={"bg-[#006d3e]"}
          color={"#ffffff"}
        >
          + Add Alumini
        </CreateNewButton>
      </section>

      {/* card section */}
      <section className="grid m-3 gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <OverViewCard
          image={userGreen}
          headerText={"4.5k"}
          text={"Total nummber of Alumini"}
          backgroundColor={"bg-[#00a860]"}
          h2color={"#ffffff"}
          pcolor={"#ffffff"}
        />
        <OverViewCard
          image={userCyan}
          headerText={"1.5k"}
          text={"Total number of 2018 Alumini"}
          backgroundColor={"bg-[#ffffff]"}
          h2color={"#000000"}
          pcolor={"#000000"}
        />
        <OverViewCard
          image={userGreen}
          headerText={"1.5k"}
          text={"Total number of 2020 Alumini"}
          backgroundColor={"bg-[#ffffff]"}
          h2color={"#000000"}
          pcolor={"#000000"}
        />
        <OverViewCard
          image={userCyan}
          headerText={"1.5k"}
          text={"Total number of 2023 Alumini"}
          backgroundColor={"bg-[#ffffff]"}
          h2color={"#000000"}
          pcolor={"#000000"}
        />
      </section>

      <section>
        <div className="flex items-center justify-between mx-4 my-2">
          <h3 className="text-[26px] font-bold">Post Recent jobs</h3>
          <p className="text-[#006d3e] text-[16px]">View All</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] justify-between gap-1 items-stretch">
          <div className=" rounded shadow-lg ">
            <div className="bg-[#ffffff] gap-2 grid grid-cols-1 md:grid-cols-2 p-2">
              <PostCard Title={"WebDeveloper"} ptag={"6 Days Ago"} />
              <PostCard Title={"Customer Care"} ptag={"2 Days Ago"} />
              <PostCard Title={"Teacher"} ptag={"4 Days Ago"} />
              <PostCard Title={"Administrator"} ptag={"6 Days Ago"} />
            </div>
          </div>

          <div className="flex  flex-col lg:mx-3 rounded-lg shadow-lg  p-2">
            <div className="flex items-center justify-between">
              <h4 className="text-nowrap mb-1 font-bold">Recent Alumini </h4>
              <img src={ThreeDots} alt="three-dots" />
            </div>
            <Users />
          </div>
        </div>
      </section>

      {/* calendar and poster section */}
      <section className="flex items-center justify-between p-2">
        <div className="flex items-center justify-around lg:gap-80">
          <h2 className="text-[22px] font-bold my-2">Recent Event</h2>
          <p className="text-[16px] text-[#006d3e]">View All</p>
        </div>
        <div>
          <h2 className="text-[22px] font-bold my-2">Calendar</h2>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-2 justify-between items-stretch">
        <div className="bg-white rounded-md p-3 shadow-lg">
          <div className="flex justify-end">
            <img src={Threedots} alt="three dot icon" className="w-6" />
          </div>
          <div className="border-b-4">
            <EventsComponent />
          </div>
          <div className="border-b-4">
            <EventsComponent />
          </div>
          <div className="border-b-4">
            <EventsComponent />
          </div>
          <div className="border-b-4">
            <EventsComponent />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-white rounded-md p-3 border">
            <CalendarUi />
          </div>
          <div className="bg-white rounded-md p-3 border mb-2">
            <div className="flex justify-between">
              <div className="flex gap-2 ">
                <img src={Edit} alt="task-icon" className="w-4" />
                <p className="text-[12px]">My Task</p>
              </div>
              <img src={ThreeDots} alt="three-dots" />
            </div>
            <p className="text-[10px] mb-2">
              Zoom meeting with Folawe on the effects of the budget allocation
              so far
            </p>
            <div className="flex justify-between mb-3">
              <CreateNewButton
                backgroundColor={"bg-[#8a0832]"}
                color={"#ffffff"}
              >
                High priority
              </CreateNewButton>
              <div className=" flex gap-2">
                <img src={Delete} alt="delete" className="w-4" />
                <img src={Edit} alt="edit" className="w-4" />
              </div>
            </div>
            <div className="w-full flex">
              <button className="bg-[#006d3e] text-[14px] rounded-sm text-white w-full py-2">
                Add Task
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Dashboard;
