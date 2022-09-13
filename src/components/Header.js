import React, { useState } from "react";
import { ReactComponent as Bell } from "../assets/Bell.svg";
import { ReactComponent as UserImage } from "../assets/userImg.svg";
import { ReactComponent as Search } from "../assets/Search icon.svg";

const Header = ({ title }) => {
  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex w-full justify-between items-center py-1">
      <div className="text-lg font-semibold">{title}</div>
      <div className="flex w-1/3 items-center justify-between">
        <div className="flex items-center text-sm px-3 py-1 rounded-lg bg-white">
          <input
            type="text"
            value={search}
            placeholder="Search"
            className="outline-none border-none"
            onChange={changeHandler}
          />
          <Search />
        </div>
        <Bell />
        <UserImage className="rounded-full" />
      </div>
    </div>
  );
};

export default Header;
