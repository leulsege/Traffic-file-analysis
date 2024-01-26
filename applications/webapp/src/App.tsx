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
import TrainingAppLayout from "./views/TrainingAppLayout";
import TrainerProfile from "./views/TrainerProfile";
import AccidentView from "./views/accidentView";
import AdminProfile from "./views/AdminProfile";
import Approve from "./views/owner/Approve";
import AdminApprove from "./views/owner/AdminApprove";

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
        <Route path="/trainerprofile" element={<TrainerProfile />} />
        <Route path="/viewaccident" element={<AccidentView />} />
        <Route path="/vehicles" element={<VehiclesApplayout />} />
        <Route path="/adminlist" element={<Approve />} />
        <Route path="/approveadmins" element={<AdminApprove />} />
        <Route path="/profile" element={<AdminProfile />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/training" element={<TrainingAppLayout />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
