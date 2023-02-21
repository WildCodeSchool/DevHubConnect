import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UserDashboard from "./pages/UserDashboard";
import UserProject from "./pages/UserProject";
import UserCalendar from "./pages/UserCalendar";
import UserSetting from "./pages/UserSetting";
import ProjectListing from "./pages/ProjectListing";
import TalentListing from "./pages/TalentListing";
import Login from "./pages/Login";
import SignUp from "./components/Login/SignUp/SignUp";
import SignIn from "./components/Login/SignIn/SignIn";
import LostPassword from "./components/Login/LostPassword/LostPassword";
import Navigation from "./components/Sidebar/Navigation";
import ProjectSingle from "./pages/ProjectSingle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/dashboard/my-project" element={<UserProject />} />
          <Route path="/dashboard/my-calendar" element={<UserCalendar />} />
          <Route path="/dashboard/my-setting" element={<UserSetting />} />
          <Route path="/project" element={<ProjectListing />} />
          <Route path="/project/:id" element={<ProjectSingle />} />
          <Route path="/talent" element={<TalentListing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/lost-password" element={<LostPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
