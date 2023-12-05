import React from "react";
import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

const ProtectedRoutes = (props) => {
    const { user } = useSelector((state) => state.auth);

  const {Components} =props
  if (!user) {
    return <Navigate to="/auth" />;
  }
  return (
    <>
      <Components />
    </>
  );
};

export default ProtectedRoutes;