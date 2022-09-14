import React, { useState } from "react";
import { ReactComponent as Bell } from "../assets/Bell.svg";
import { ReactComponent as UserImage } from "../assets/userImg.svg";
import { ReactComponent as Search } from "../assets/Search icon.svg";
import { ReactComponent as Google } from "../assets/google-icon.svg";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);

  const fname = localStorage.getItem("userfname");
  const lname = localStorage.getItem("userlname");
  const imgurl = localStorage.getItem("userimg");

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const logout = (response) => {
    console.log(response);
    localStorage.clear();
    navigate("/signin");
  };
  const googleLogoutError = (error) => {
    console.log("google login error", error);
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
        <button className="outline-none" onClick={() => setToggle(!toggle)}>
          {!imgurl ? (
            <UserImage className="rounded-full" />
          ) : (
            <img
              className="h-8 rounded-full border-2"
              src={imgurl}
              alt="user"
            />
          )}
        </button>
        {toggle && (
          <div className="absolute top-20 right-10 flex flex-col w-44 px-4 py-3 rounded-xl bg-white border border-blue-500">
            <div className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              <div className="text-xs font-semibold">
                Hey! {fname} {lname}
              </div>
            </div>
            <GoogleLogout
              clientId={process.env.REACT_APP_CLIENT_ID}
              onLogoutSuccess={logout}
              onFailure={googleLogoutError}
              className="mt-2"
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="flex items-center mt-2 px-5 py-1.5 rounded-xl bg-white text-xs outline-none border-2"
                >
                  <Google className="mr-2" />
                  Sign Out{" "}
                </button>
              )}
            ></GoogleLogout>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
