import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// // Function to set isAuthenticated with expiration time in LocalStorage
// function setAuthentication(isAuthenticated) {
//   const expirationTime = new Date();
//   expirationTime.setMonth(expirationTime.getMonth() + 2); // Set expiration to 2 months from now

//   const authData = {
//     isAuthenticated,
//     expirationTime: expirationTime.getTime(),
//   };

//   localStorage.setItem("authData", JSON.stringify(authData));
// }

// // Function to check if the user is authenticated
// function isAuthenticated() {
//   const authDataString = localStorage.getItem("authData");

//   if (!authDataString) {
//     return false;
//   }

//   const authData = JSON.parse(authDataString);
//   const currentTime = new Date().getTime();

//   // Check if the expiration time has passed
//   if (currentTime >= authData.expirationTime) {
//     // If expired, remove from LocalStorage

//     return false;
//   }

//   return authData.isAuthenticated;
// }

function ProtectedRoute({ children, isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();
  const authDataString = localStorage.getItem("authData");
  const currentTime = new Date().getTime();

  useEffect(() => {
    if (authDataString) {
      const authData = JSON.parse(authDataString);
      if (authData.expirationTime < currentTime)
        localStorage.removeItem("authData");
    }
    if (localStorage.getItem("authData") != null) {
      console.log(localStorage.getItem("authData"));
      setIsAuthenticated(true);
    }

    console.log(isAuthenticated);
    // Check if the user is not authenticated and redirect to login
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [navigate, isAuthenticated]);

  return isAuthenticated ? <>{children}</> : null;
}

export default ProtectedRoute;
