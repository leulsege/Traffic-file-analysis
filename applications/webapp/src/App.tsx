// import HomeNavbar from "./components/homeNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./views/AboutUs";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import ForgotPassword from "./views/ForgetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
