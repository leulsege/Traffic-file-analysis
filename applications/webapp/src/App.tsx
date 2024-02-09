import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./views/AboutUs";
import HomePage from "./views/HomePage";
import ForgotPassword from "./views/ForgetPassword";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Verify from "./views/Verify";
import AppLayout from "./views/AppLayout";
import ResetPassword from "./views/ResetPassword";
import { useState } from "react";
import ProtectedRoute from "./views/ProtectedRoute";
import DriverProfile from "./views/DriverProfile";
import NotFound from "./components/NotFound";
import VehiclesAppLayout from "./views/VehiclesApplayout";
import VehicleProfile from "./views/VehicleProfile";
import TrainingAppLayout from "./views/TrainingAppLayout";
import TrainerProfile from "./views/TrainerProfile";
import AdminProfile from "./views/AdminProfile";
import Approve from "./views/owner/Approve";
import AdminApprove from "./views/owner/AdminApprove";
import AccidentView from "./views/accidentView";
import FiredAppLayout from "./views/FiredAppLayout";
import ExTrainersLayout from "./views/ExTrainersLayout";
import TopDriversLayout from "./views/TopDriversLayout";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route index element={<Navigate replace to="drivers" />} />
        <Route
          path="drivers"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            >
              <AppLayout />
            </ProtectedRoute>
          }
        />

        <Route
          path="topdrivers"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            >
              <TopDriversLayout />
            </ProtectedRoute>
          }
        />

        <Route
          path="exdrivers"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            >
              <FiredAppLayout />
            </ProtectedRoute>
          }
        />

        <Route
          path="drivers/:id"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            >
              <DriverProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vehicles"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            >
              <VehiclesAppLayout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/extrainers"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            >
              <ExTrainersLayout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vehicles/:id"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            >
              <VehicleProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trainings"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            >
              <TrainingAppLayout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trainings/:id"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            >
              <TrainerProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admins"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            >
              <Approve />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admins/:id"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            >
              <AdminApprove />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            >
              <AdminProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/accidents/:id"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            >
              <AccidentView />
            </ProtectedRoute>
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify/:token" element={<Verify />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
