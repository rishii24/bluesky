import React from "react";

const UserInfo = ({ userimg, firstName, lastName, email, index }) => {
  return (
    <div
      className="flex justify-between items-center w-full px-4 py-2 mt-4 rounded-xl text-sm font-medium"
      style={{ backgroundColor: index % 2 ? "#EDEDED" : "#F5F5F5" }}
    >
      <div>
        <img src={userimg} alt="img" className="h-8 rounded-full" />
      </div>
      <div className="flex justify-start w-1/5">
        {firstName} {lastName}
      </div>
      <div className="flex justify-start w-1/5">{email}</div>
      <div className="flex justify-start w-16">
        {index % 2 ? "Male" : "Female"}
      </div>
      <div className="flex justify-start w-16">
        {index == 0 ? "Admin " : "User"}
      </div>
    </div>
  );
};

export default UserInfo;
