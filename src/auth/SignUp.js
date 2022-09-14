import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { ReactComponent as Google } from "../assets/google-icon.svg";
import { ReactComponent as Apple } from "../assets/apple-icon.svg";
import { ReactComponent as EyeOpen } from "../assets/eye-open.svg";
import { ReactComponent as EyeClose } from "../assets/eye-close.svg";

const SignUp = () => {
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId: process.env.REACT_APP_CLIENT_ID,
      scope: "profile email",
      plugin_name: "dash",
    });
  });

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
    confirmPass: "",
  });
  const [togglePass, settogglePass] = useState(false);
  const [agree, setAgree] = useState(false);

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userInfo);
    if (
      userInfo.firstName.length > 1 &&
      userInfo.email.length > 5 &&
      userInfo.pass.length > 7
    ) {
      let temptoken = (Math.random() * 1e128).toString(36);
      localStorage.setItem("random token", temptoken);
      navigate("/dashboard");
    }
    setUserInfo({
      firstName: "",
      lastName: "",
      email: "",
      pass: "",
      confirmPass: "",
    });
    setAgree(false);
  };

  const loginGoogle = (response) => {
    if (response) {
      localStorage.setItem("random token", response?.tokenObj?.access_token);
      localStorage.setItem("userfname", response?.profileObj?.givenName);
      localStorage.setItem("userlname", response?.profileObj?.familyName);
      localStorage.setItem("userimg", response?.profileObj?.imageUrl);
      navigate("/dashboard");
    }
  };
  const googleLoginError = (error) => {
    console.log("google login error", error);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col md:w-2/3 w-full lg:px-56 md:px-20 py-8 bg-background">
        <div className="flex flex-col px-6">
          <div className="text-4xl font-extrabold">Create an account</div>
          <div className="font-semibold">
            Create an account to use dashboard
          </div>
        </div>
        <div className="flex items-center md:justify-between justify-start px-6 my-2">
          <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="flex items-center px-5 py-1.5 rounded-xl bg-white text-sm text-gray-500 outline-none"
              >
                <Google className="mr-2" />
                Sign in with Google{" "}
              </button>
            )}
            buttonText="Login"
            onSuccess={loginGoogle}
            onFailure={googleLoginError}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
          <div className="flex items-center px-5 py-1.5 rounded-xl bg-white text-sm text-gray-500 cursor-pointer">
            <Apple className="mr-2" />
            Sign in with Apple
          </div>
        </div>
        <div className="flex flex-col px-6 mt-2">
          <form
            onSubmit={submitHandler}
            className="flex flex-col bg-white rounded-xl px-8 py-4"
          >
            <div className="flex justify-between">
              <div className="flex flex-col w-5/12">
                <label htmlFor="firstName" className="font-serif text-base">
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
                <label htmlFor="lastName" className="font-serif text-base">
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
            <div className="flex flex-col mt-2">
              <label htmlFor="email" className="font-serif text-base">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={userInfo.email}
                className="px-4 py-1 rounded-md mt-1 outline-none font-serif bg-gray-100"
                onChange={changeHandler}
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="pass" className="font-serif text-base">
                Password
              </label>
              <div className="flex items-center px-4 py-1 rounded-md mt-1 font-serif bg-gray-100">
                <input
                  type={togglePass ? "text" : "password"}
                  id="pass"
                  minLength={8}
                  value={userInfo.pass}
                  name="pass"
                  required
                  className="outline-none border-none bg-gray-100 w-11/12"
                  onChange={changeHandler}
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
              <label htmlFor="confirmPass" className="font-serif text-base">
                Confirm Password
              </label>
              <div className="flex items-center px-4 py-1 rounded-md mt-1 font-serif bg-gray-100">
                <input
                  type={togglePass ? "text" : "password"}
                  id="confirmPass"
                  minLength={8}
                  value={userInfo.confirmPass}
                  name="confirmPass"
                  required
                  className="outline-none border-none bg-gray-100 w-11/12"
                  onChange={changeHandler}
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
            <div className="text-gray-400 my-3 cursor-pointer font-serif">
              <input
                type="checkbox"
                onChange={() => {
                  setAgree(!agree);
                }}
                value={agree}
                name="agree"
                className="mr-1"
              />{" "}
              I agree the
              <span className="text-blue-600 cursor-pointer">
                {" "}
                terms and conditions.{" "}
              </span>
            </div>
            <button
              onClick={submitHandler}
              className="border-none outline-none bg-primary py-2 rounded-lg text-white font-semibold"
              style={{ cursor: agree ? "pointer" : "not-allowed" }}
              disabled={agree !== true}
            >
              Sign Up
            </button>
          </form>
          <div className="mt-4 text-center text-gray-500 font-serif">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/signin")}
            >
              {" "}
              Sign in here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
