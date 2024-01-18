// import HomeNavbar from "./components/homeNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./views/AboutUs";
import HomePage from "./views/HomePage";
import ForgotPassword from "./views/ForgetPassword";
import Login from "./views/Login";
import Signup from "./views/Signup";
import AppLayout from "./views/AppLayout";
import DriverProfile from "./views/DriverProfile";
import NotFound from "./components/NotFound";
import { useState } from "react";
import VehiclesApplayout from "./views/VehiclesApplayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/app" element={<AppLayout />}></Route>
        <Route path="/driverprofile" element={<DriverProfile />} />
        <Route path="/vehicles" element={<VehiclesApplayout />} />
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
