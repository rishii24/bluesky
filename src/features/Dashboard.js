import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";

import Revenue from "../assets/Revenue.svg";
import Transaction from "../assets/Transaction.svg";
import Like from "../assets/Like.svg";
import Users from "../assets/Users.svg";

const Dashboard = () => {
  return (
    <div className="flex bg-background">
      <Navbar />
      <div className="flex flex-col w-4/5 px-10 py-12">
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
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
