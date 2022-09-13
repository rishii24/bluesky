import React from "react";

const InfoCard = ({ title, value, CompImg, bgColor }) => {
  return (
    <div
      className="flex flex-col w-44 px-4 py-3 rounded-xl"
      style={{ background: `${bgColor}` }}
    >
      <div className="flex w-full justify-end"><img src={CompImg} alt="img"/></div>
      <div className="mt-2">
        <div className="text-xs font-semibold">{title}</div>
        <div className="text-xl font-bold">{value}</div>
      </div>
    </div>
  );
};

export default InfoCard;
