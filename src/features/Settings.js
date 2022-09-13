import React, { useState } from "react";
import Switch from "react-switch";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { ReactComponent as UserImage } from "../assets/userImg.svg";
import { ReactComponent as EyeOpen } from "../assets/eye-open.svg";
import { ReactComponent as EyeClose } from "../assets/eye-close.svg";

const Settings = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "Subhash",
    lastName: "Chandra",
    dob: "1994-02-24",
    phone: "+918965236578",
    address: "Delhi",
  });
  const [accountInfo, setaccountInfo] = useState({
    email: "",
    pass: "",
    newPass: "",
  });
  const [togglePass, settogglePass] = useState(false);
  const [toggle2fa, settoggle2fa] = useState(false);

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const accountChangeHandler = (e) => {
    let { name, value } = e.target;
    setaccountInfo({ ...userInfo, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userInfo);
    setUserInfo({
      firstName: "",
      lastName: "",
      dob: "",
      phone: "",
      address: "",
    });
  };

  const submitAccHandler = (e) => {
    e.preventDefault();
    console.log(accountInfo);
    setaccountInfo({
      email: "",
      pass: "",
      newPass: "",
    });
  };

  const accountDeleteHandler = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="flex bg-background">
      <Navbar />
      <div className="flex flex-col w-4/5 px-10 pt-8">
        <Header title="Settings" />
        <div className="flex mt-4">
          <div className="flex flex-col bg-white rounded-xl w-1/2 px-8 py-4 mr-10 h-max">
            <div className="font-semibold">Profile</div>
            <div className="flex justify-between mt-4">
              <div className="flex flex-col">
                <UserImage className="h-20 w-20 rounded-full" />
                <button className="flex justify-center border border-1 mt-2  text-xs py-1 px-2 rounded-lg">
                  Change
                </button>
              </div>
              {/**PROFILE FORM */}
              <form
                onSubmit={submitHandler}
                className="flex flex-col w-2/3 bg-white rounded-xl text-sm"
              >
                <div className="flex justify-between">
                  <div className="flex flex-col w-5/12">
                    <label htmlFor="firstName" className="font-serif text-sm">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={userInfo.firstName}
                      className="px-4 py-1 rounded-md mt-1 outline-none font-serif bg-gray-100"
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="flex flex-col w-5/12">
                    <label htmlFor="lastName" className="font-serif text-sm">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={userInfo.lastName}
                      className="px-4 py-1 rounded-md mt-1 outline-none font-serif bg-gray-100"
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="dob" className="font-serif text-sm">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    required
                    value={userInfo.dob}
                    className="px-4 py-1 rounded-md mt-1 outline-none font-serif bg-gray-100"
                    onChange={changeHandler}
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="phone" className="font-serif text-sm">
                    Phone
                  </label>
                  <div className="flex items-center px-4 py-1 rounded-md mt-1 font-serif bg-gray-100">
                    <input
                      type="text"
                      id="phone"
                      value={userInfo.phone}
                      name="phone"
                      required
                      className="outline-none border-none bg-gray-100 w-11/12"
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="address" className="font-serif text-sm">
                    Address
                  </label>
                  <div className="flex items-center px-4 py-1 rounded-md mt-1 font-serif bg-gray-100">
                    <input
                      type="text"
                      id="address"
                      minLength={8}
                      value={userInfo.address}
                      name="address"
                      required
                      className="outline-none border-none bg-gray-100 w-11/12"
                      onChange={changeHandler}
                    />
                  </div>
                </div>

                <button
                  onClick={submitHandler}
                  className="place-self-end border-none outline-none bg-primary px-3 py-1 mt-4 text-sm rounded-lg text-white font-medium"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col w-1/3">
            <div className="flex flex-col px-8 py-4 bg-white rounded-xl">
              <div className="font-semibold">Account</div>

              {/**ACCOUNT FORM */}

              <form
                onSubmit={submitAccHandler}
                className="flex flex-col bg-white rounded-xl pt-2 text-sm"
              >
                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="font-serif text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={accountInfo.email}
                    className="px-4 py-1 rounded-md mt-1 outline-none font-serif bg-gray-100"
                    onChange={accountChangeHandler}
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="pass" className="font-serif text-sm">
                    Current Password
                  </label>
                  <div className="flex items-center px-4 py-1 rounded-md mt-1 font-serif bg-gray-100">
                    <input
                      type={togglePass ? "text" : "password"}
                      id="pass"
                      minLength={8}
                      value={accountInfo.pass}
                      name="pass"
                      required
                      className="outline-none border-none bg-gray-100 w-11/12"
                      onChange={accountChangeHandler}
                    />
                    <button
                      onClick={() => {
                        settogglePass(!togglePass);
                      }}
                    >
                      {togglePass ? <EyeClose /> : <EyeOpen />}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="newPass" className="font-serif text-sm">
                    New Password
                  </label>
                  <div className="flex items-center px-4 py-1 rounded-md mt-1 font-serif bg-gray-100">
                    <input
                      type={togglePass ? "text" : "password"}
                      id="newPass"
                      minLength={8}
                      value={accountInfo.newPass}
                      name="newPass"
                      required
                      className="outline-none border-none bg-gray-100 w-11/12"
                      onChange={accountChangeHandler}
                    />
                    <button
                      onClick={() => {
                        settogglePass(!togglePass);
                      }}
                    >
                      {togglePass ? <EyeClose /> : <EyeOpen />}
                    </button>
                  </div>
                </div>
                <button
                  onClick={submitAccHandler}
                  className="place-self-end border-none outline-none bg-primary px-3 py-1 mt-4 text-sm rounded-lg text-white font-medium"
                >
                  Save
                </button>
              </form>
            </div>
            <div className="flex flex-col px-8 py-4 bg-white rounded-xl mt-4">
              <div className="font-semibold">Security</div>
              <div className="flex text-sm items-center w-full justify-between">
                <span>2-Step verification</span>
                <Switch
                  onChange={() => settoggle2fa(!toggle2fa)}
                  checked={toggle2fa}
                  height={14}
                  width={40}
                  handleDiameter={8}
                />
              </div>
            </div>
            <div className="flex flex-col px-8 py-4 bg-white rounded-xl mt-4">
              <div className="font-semibold text-red-600">Danger Zone</div>
              <button
                onClick={accountDeleteHandler}
                className="outline-none border-2 border-red-600 py-1 rounded-lg text-red-600 font-semibold mt-2"
              >
                Delete my account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
