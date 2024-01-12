import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

async function ProtectedRoute({
  children,
  isAuthenticated,
  setIsAuthenticated,
}) {
  const navigate = useNavigate();
  const authDataString = localStorage.getItem("authData");
  const currentTime = new Date().getTime();

  if (authDataString) {
    const authData = JSON.parse(authDataString);
    if (authData.expirationTime < currentTime)
      localStorage.removeItem("authData");
  }
  if (localStorage.getItem("authData") != null) {
    console.log(localStorage.getItem("authData"));
    await setIsAuthenticated(true);
  }
  useEffect(() => {
    console.log(isAuthenticated);
    // Check if the user is not authenticated and redirect to login
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [navigate, isAuthenticated]);

  return isAuthenticated ? <>{children}</> : null;
}
export default ProtectedRoute;
