import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const validation = localStorage.getItem("random token");
  console.log(validation, "token");

  return validation ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
