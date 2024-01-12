import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route
          path="/login"
          element={
            <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
          }
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/app"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            >
              <AppLayout />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/driverprofile" element={<DriverProfile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify/:token" element={<Verify />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
