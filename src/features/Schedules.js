import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Schedules = () => {
  return (
    <div className="flex bg-background">
      <Navbar />
      <div className="flex flex-col w-4/5 px-10 pt-8">
        <Header title="Schedules" />
        <div className="flex flex-col justify-center w-full mt-8 px-8 py-4 rounded-xl bg-white">
          <div className="flex justify-between w-full">
            <span className="text-lg font-semibold">Today’s schedule</span>
          </div>
          <div className="flex flex-col mt-2">
            <ScheduleStripe
              title="Meeting with suppliers from Kuta Bali"
              time="14.00-15.00"
              where="at Sunset Road, Kuta, Bali "
              colour="#9BDD7C"
            />
            <ScheduleStripe
              title="Check operation at Giga Factory 1"
              time="18.00-20.00"
              where="at Central Jakarta"
              colour="#6972C3"
            />
            <ScheduleStripe
              title="Check operation at Siman Factory 7"
              time="18.00-20.00"
              where="at Central Jakarta"
              colour="#f5475b"
            />
            <ScheduleStripe
              title="Factory Visit with Steve"
              time="20.00-22.00"
              where="at Central Jakarta"
              colour="#9BDD7C"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedules;

const ScheduleStripe = ({ title, time, where, colour }) => {
  return (
    <div
      className="flex flex-col px-2 py-1 border-l-4 my-1"
      style={{ borderLeftColor: `${colour}` }}
    >
      <span className="font-medium">{title}</span>
      <span className="text-sm text-gray-400">{time}</span>
      <span className="text-sm text-gray-400">{where}</span>
    </div>
  );
};
