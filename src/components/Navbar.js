import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as DashIcon } from "../assets/dashboard_icon.svg";
import { ReactComponent as UserIcon } from "../assets/user_icon.svg";
import { ReactComponent as SettingsIcon } from "../assets/setting_icon.svg";
import { ReactComponent as TransactionIcon } from "../assets/transaction_icon.svg";
import { ReactComponent as ScheduleIcon } from "../assets/schedule_icon.svg";

const Navbar = () => {
  return (
    <div className="flex w-1/5 px-8 py-8 h-screen">
      <div className="flex flex-col justify-between bg-primary text-white rounded-3xl w-full px-8 py-12">
        <div>
          <div className="text-3xl font-semibold">Dash.</div>
          <div className="flex flex-col my-8">
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold flex my-2" : "flex my-2"
              }
              to="/dashboard"
            >
              <DashIcon className="mr-4" />
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold flex my-2" : "flex my-2"
              }
              to="/transactions"
            >
              <TransactionIcon className="mr-4" />
              Transactions
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold flex my-2" : "flex my-2"
              }
              to="/schedules"
            >
              <ScheduleIcon className="mr-4" />
              Schedules
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold flex my-2" : "flex my-2"
              }
              to="/users"
            >
              <UserIcon className="mr-4" />
              Users
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold flex my-2" : "flex my-2"
              }
              to="/settings"
            >
              <SettingsIcon className="mr-4" />
              Settings
            </NavLink>
          </div>
        </div>
        <div className="text-sm font-thin">
          <div className="mb-1 cursor-pointer">Help</div>
          <div className="cursor-pointer">Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
