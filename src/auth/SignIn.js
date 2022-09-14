import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { ReactComponent as Google } from "../assets/google-icon.svg";
import { ReactComponent as Apple } from "../assets/apple-icon.svg";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

const SignIn = () => {
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId: process.env.REACT_APP_CLIENT_ID,
      scope: "profile email",
      plugin_name: "dash",
    });
  });
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    pass: "",
  });

  useEffect(() => {
    window.alert(
      "Any ID and Password can be used for normal login as long as it supports the format"
    );
  }, []);

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (userInfo.email.length > 5 && userInfo.pass.length > 7) {
      let temptoken = (Math.random() * 1e128).toString(36);
      localStorage.setItem("random token", temptoken);
      navigate("/dashboard");
    }
    setUserInfo({ email: "", pass: "" });
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
    window.alert("Google says :" + error);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col md:w-2/3 w-full lg:px-56 md:px-20 py-16 bg-background">
        <div className="flex flex-col px-6">
          <div className="text-4xl font-extrabold">Sign In</div>
          <div className="font-semibold mt-2">Sign in to your account</div>
        </div>
        <div className="flex items-center md:justify-between justify-start px-6 my-6">
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
        <div className="flex flex-col px-6">
          <form
            onSubmit={submitHandler}
            className="flex flex-col bg-white rounded-xl px-8 py-8"
          >
            <div className="flex flex-col">
              <label htmlFor="email" className="font-serif text-base">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={userInfo.email}
                className="px-4 py-1.5 rounded-md mt-1 outline-none font-serif bg-gray-100"
                onChange={changeHandler}
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="pass" className="font-serif text-base">
                Password
              </label>
              <input
                type="password"
                id="pass"
                minLength={8}
                value={userInfo.pass}
                name="pass"
                required
                className="px-4 py-1.5 rounded-md mt-1 outline-none font-serif bg-gray-100"
                onChange={changeHandler}
              />
            </div>
            <div className="text-blue-600 my-3 cursor-pointer font-serif">
              Forgot password ?
            </div>
            <button
              onClick={submitHandler}
              className="border-none outline-none bg-primary py-2 rounded-lg text-white font-semibold"
            >
              Sign In
            </button>
          </form>
          <div className="mt-4 text-center text-gray-500 font-serif">
            Don’t have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              {" "}
              Register here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
