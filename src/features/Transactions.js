import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Transactions = () => {
  return (
    <div className="flex bg-background">
      <Navbar />
      <div className="flex flex-col w-4/5 px-10 pt-8">
        <Header title="Transactions" />
      </div>
    </div>
  );
};

export default Transactions;
