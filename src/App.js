import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";

import PrivateRoutes from "./routing/PrivateRoutes";

import Dashboard from "./features/Dashboard";
import Transactions from "./features/Transactions";
import Users from "./features/Users";
import Schedules from "./features/Schedules";
import Settings from "./features/Settings";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Internal navigation routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/schedules" element={<Schedules />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          {/** */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
