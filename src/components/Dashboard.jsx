import React from 'react'
import CreateNewButton from '../components/CreateNewButton'
import OverViewCard from '../components/OverViewCard';
import userGreen from "../assets/user-icon-green.svg";
import userCyan from "../assets/user-icon-on card-cyan.svg"

const Dashboard = () => {


  return (
    <div>
      <div className=" my-4">
        <h3 className="bg-[#eeffd2] rounded-lg text-[#476806] m-3 ">
          Welcome to Teach for Nigeria Alumini Dashboard!
        </h3>
      </div>
      {/* cards heading */}
      <section className="flex justify-between">
        <h3 className="text-[20px] lg:text-[30px] m-3">Overview</h3>

        <CreateNewButton backgroundColor={"#006d3e"} color={"#ffffff"}>
          Add Alumini
        </CreateNewButton>
      </section>
      {/* card section */}
      <section className="grid m-3 gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <OverViewCard
          image={userGreen}
          headerText={"4.5k"}
          text={""}
          backgroundColor={"#00a860"}
        />
        <OverViewCard
          image={userCyan}
          headerText={"4.5k"}
          text={""}
          backgroundColor={"#ffffff"}
        />
        <OverViewCard
          image={userGreen}
          headerText={"4.5k"}
          text={""}
          backgroundColor={"#00a860"}
        />
        <OverViewCard
          image={userCyan}
          headerText={"4.5k"}
          text={""}
          backgroundColor={"#ffffff"}
        />
      </section>
    </div>
  );
}
export default Dashboard