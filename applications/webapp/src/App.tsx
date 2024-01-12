import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./views/AboutUs";
import HomePage from "./views/HomePage";
import ForgotPassword from "./views/ForgetPassword";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Verify from "./views/Verify";
import AppLayout from "./views/AppLayout";
import ResetPassword from "./views/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/app" element={<AppLayout />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify/:token" element={<Verify />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
