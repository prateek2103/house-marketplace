import React from "react";
import { Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import { Navigate } from "react-router-dom";
import Spinner from "./Spinner";

const PrivateRoute = () => {
  const { loggedIn, chekingStatus } = useAuthStatus();
  if (chekingStatus) {
    return <Spinner />;
  }

  return loggedIn ? <Outlet></Outlet> : <Navigate to="/signin"></Navigate>;
};

export default PrivateRoute;
