import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
          >
            <Grid item xs={6} md={2}>
              <Item>
                <Sidebar />
              </Item>
            </Grid>
            <Grid item xs={6} md={10}>
              <Item>
                <Routes>
                  <Route path="/register" element={<SignUp />} />
                  <Route path="/login" element={<SignIn />} />
                  <Route path="/forgot-password" element={<LostPassword />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/cgu" element={<CGU />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<UserDashboard />} />
                  <Route
                    path="/dashboard/my-project"
                    element={<UserProject />}
                  />
                  <Route
                    path="/dashboard/my-calendar"
                    element={<UserCalendar />}
                  />
                  <Route
                    path="/dashboard/my-setting"
                    element={<UserSetting />}
                  />
                  <Route path="/project" element={<ProjectListing />} />
                  <Route path="/project/:id" element={<ProjectSingle />} />
                  <Route path="/add-project" element={<ProjectForm />} />
                  <Route path="/calendar" element={<ProjectCalendar />} />
                  <Route path="/talent" element={<TalentListing />} />
                  <Route path="/talent/:id" element={<TalentSingle />} />
                </Routes>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Router>
    </div>
  );
}

export default App;
