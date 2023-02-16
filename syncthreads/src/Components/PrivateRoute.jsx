import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((store) => store.auth);
  if (!token) {
    alert("User not logged in");
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
