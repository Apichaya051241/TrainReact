import React from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {
  isAuthented: boolean;
};
const ProtectedRoutes = ({ isAuthented }: Props) => {
  return isAuthented ? <Outlet /> : <Navigate to="/login" />;     //route app when login and no login / route page
};

export default ProtectedRoutes;