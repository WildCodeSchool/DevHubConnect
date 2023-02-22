/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Terms from "./pages/TermsAndConditions";
import CGU from "./pages/CGU";
import NotFound from "./pages/NotFound";
import UserDashboard from "./pages/UserDashboard";
import UserProject from "./pages/UserProject";
import UserCalendar from "./pages/UserCalendar";
import UserSetting from "./pages/UserSetting";
import ProjectListing from "./pages/ProjectListing";
import TalentListing from "./pages/TalentListing";
import LostPassword from "./pages/LostPassword";
import ProjectSingle from "./pages/ProjectSingle";
import TalentSingle from "./pages/TalentSingle";
import ProjectForm from "./pages/ProjectForm";
import ProjectCalendar from "./pages/ProjectCalendar";
import Sidebar from "./components/Sidebar/Sidebar";

const drawerWidth = 240;

function App(props) {
  return (
    <div className="App">
      <Router>
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Routes>
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/forgot-password" element={<LostPassword />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cgu" element={<CGU />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/dashboard/my-project" element={<UserProject />} />
            <Route path="/dashboard/my-calendar" element={<UserCalendar />} />
            <Route path="/dashboard/my-setting" element={<UserSetting />} />
            <Route path="/project" element={<ProjectListing />} />
            <Route path="/project/:id" element={<ProjectSingle />} />
            <Route path="/add-project" element={<ProjectForm />} />
            <Route path="/calendar" element={<ProjectCalendar />} />
            <Route path="/talent" element={<TalentListing />} />
            <Route path="/talent/:id" element={<TalentSingle />} />
          </Routes>
        </Box>
      </Router>
    </div>
  );
}

export default App;
