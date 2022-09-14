import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import { useNavigate } from "react-router-dom";
import Revenue from "../assets/Revenue.svg";
import Transaction from "../assets/Transaction.svg";
import Like from "../assets/Like.svg";
import Users from "../assets/Users.svg";
import LineChartComp from "../components/charts/LineChart";
import PieChartComp from "../components/charts/PieChart";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-background">
      <Navbar />
      <div className="flex flex-col w-4/5 px-10 pt-8">
        <Header title="Dashboard" />
        <div className="flex flex-col pt-4">
          <div className="flex w-full justify-between">
            <InfoCard
              CompImg={Revenue}
              title="Total Revenue"
              value="$2,129,430"
              bgColor="#DDEFE0"
            />
            <InfoCard
              CompImg={Transaction}
              title="Total Transactions"
              value="1,520"
              bgColor="#F4ECDD"
            />
            <InfoCard
              CompImg={Like}
              title="Total Likes"
              value="9,721"
              bgColor="#EFDADA"
            />
            <InfoCard
              CompImg={Users}
              title="Total Users"
              value="892"
              bgColor="#DEE0EF"
            />
          </div>
          <div className="flex flex-col mt-4 pb-4 overflow-y-scroll h-96">
            <div className="flex flex-col justify-center w-full px-4 py-4 rounded-xl bg-white ">
              <div className="text-lg font-semibold px-3">Activities</div>
              <div className="flex pl-2 pr-4">
                <div className="flex justify-between w-full">
                  <select className="outline-none">
                    <option>May-June 2022</option>
                    <option>June-July 2022</option>
                  </select>
                  <div className="flex items-center justify-end w-1/4">
                    <span className="h-2 w-2 rounded-full bg-red-300 mr-2"></span>{" "}
                    User
                    <span className="h-2 w-2 rounded-full bg-lime-400 mx-2"></span>{" "}
                    Guest
                  </div>
                </div>
              </div>
              <LineChartComp />
            </div>
            <div className="flex md:flex-row flex-col justify-between mt-4">
              <div className="flex flex-col justify-center px-8 py-4 rounded-xl bg-white w-5/12">
                <div className="flex justify-between w-full">
                  <span className="font-semibold">Top products</span>
                  <select className="outline-none text-xs text-gray-500">
                    <option>May-June 2022</option>
                    <option>June-July 2022</option>
                  </select>
                </div>
                <div className="flex justify-between items-center">
                  <PieChartComp />
                  <div className="flex flex-col text-sm mt-2">
                    <Products
                      text="Basic Tees"
                      subtext="55%"
                      colour="#98D89E"
                    />
                    <Products
                      text="Custom Short Pants"
                      subtext="31%"
                      colour="#F6DC7D"
                    />
                    <Products
                      text="Super Hoodies"
                      subtext="14%"
                      colour="#EE8484"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center w-1/2 px-8 py-4 rounded-xl bg-white">
                <div className="flex justify-between w-full">
                  <span className="font-semibold">Today’s schedule</span>
                  <button
                    className="text-sm text-gray-400 outline-none border-none"
                    onClick={() => navigate('/schedules')}
                  >
                    See all {">"}
                  </button>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const Products = ({ text, subtext, colour }) => {
  return (
    <div className="flex flex-col mt-1">
      <div className="flex items-center font-semibold">
        <div
          className="h-2 w-2 rounded-full mr-2"
          style={{ backgroundColor: `${colour}` }}
        ></div>
        {text}
      </div>
      <div className="mt-2 text-gray-500 pl-4">{subtext}</div>
    </div>
  );
};

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
