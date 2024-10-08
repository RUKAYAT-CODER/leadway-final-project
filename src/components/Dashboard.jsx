import React from 'react'
import CreateNewButton from '../components/CreateNewButton'
import OverViewCard from '../components/OverViewCard';
import userGreen from "../assets/user-icon-green.svg";
import userCyan from "../assets/user-icon-on card-cyan.svg"
import PostCard from '../components/PostCard'
import ThreeDots from '../assets/three-dot-icon.svg'
import Users from '../pages/user/Users';

const Dashboard = () => {


  return (
    <div>
      <div className=" my-4">
        <h3 className="bg-[#eeffd2] rounded-lg text-[#476806] p-1 m-3 w-[380px]">
          Welcome to Teach for Nigeria Alumini Dashboard!
        </h3>
      </div>
      {/* cards heading */}
      <section className="flex justify-between">
        <h3 className="text-[20px] lg:text-[30px] font-bold m-3">Overview</h3>

        <CreateNewButton backgroundColor={"#006d3e"} color={"#ffffff"}>
          Add Alumini
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
          backgroundColor={"#ffffff"}
          h2color={"#000000"}
          pcolor={"#000000"}
        />
        <OverViewCard
          image={userGreen}
          headerText={"1.5k"}
          text={"Total number of 2020 Alumini"}
          backgroundColor={"#ffffff"}
          h2color={"#000000"}
          pcolor={"#000000"}
        />
        <OverViewCard
          image={userCyan}
          headerText={"1.5k"}
          text={"Total number of 2023 Alumini"}
          backgroundColor={"#ffffff"}
          h2color={"#000000"}
          pcolor={"#000000"}
        />
      </section>
      <section>
        <div className="flex items-center justify-between m-4">
          <h3 className="text-[30px] text-bold">Recent Post jobs</h3>
          <p className="text-[#006d3e]">View All</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_210px] items-center justify-between gap-2">
            <div className="bg-[#ffffff]  p-6 gap-3 grid shadow-md grid-cols-1 md:grid-cols-2">
              <PostCard h3Title={"WebDeveloper"} pDaysAgo={"6 Days Ago"} />
              <PostCard h3Title={"Customer Care"} pDaysAgo={"2 Days Ago"} />
              <PostCard h3Title={"Teacher"} pDays={"4 Days Ago"} />
              <PostCard h3Title={"Administrator"} pDaysAgo={"6 Days Ago"} />
            </div>

          <div className="flex  flex-col lg:mx-3 rounded-lg shadow-sm p-3">
            <div className="flex items-center justify-between">
              <h4 className="text-nowrap mb-2 font-bold">Recent Alumini </h4>
              <img src={ThreeDots} alt="three-dots" />
            </div>
            <Users />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Dashboard