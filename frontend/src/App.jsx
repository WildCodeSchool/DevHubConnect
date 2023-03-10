/* eslint-disable no-restricted-globals */
import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useLocation,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import "./App.css";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import fr from "date-fns/locale/fr";
import Theme from "./theme/theme";

import { SignUpContextProvider } from "./Contexts/SignUpContext";

import LogoConnect from "./components/Sidebar/Logo";
import Footer from "./components/Sidebar/Footer";
import NavItems from "./components/Sidebar/Navigation/NavItems";
import NavItemsTopBar from "./components/Sidebar/Navigation/NavItemTopBar";

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
import Charte from "./pages/Charte";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="flex-start"
      spacing={1}
    >
      <LogoConnect />
      <NavItems />
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          zIndex: "tooltip",
        }}
      >
        <Footer />
      </Box>
    </Stack>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              backgroundColor: "BgSidebar.main",
              width: { sm: `100%` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" noWrap component="div">
                DevHub Connect
              </Typography>
              <NavItemsTopBar />
            </Toolbar>
          </AppBar>
          {location.pathname !== "/" &&
            location.pathname !== "/login" &&
            location.pathname !== "/register" && (
              <Box
                component="nav"
                sx={{
                  backgroundColor: "primary.dark",
                  width: { sm: drawerWidth },
                  flexShrink: { sm: 0 },
                }}
                aria-label="mailbox folders"
              >
                <Drawer
                  container={container}
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: drawerWidth,
                    },
                  }}
                >
                  {drawer}
                </Drawer>
                <Drawer
                  variant="permanent"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: drawerWidth,
                      height: "100%",
                    },
                  }}
                  PaperProps={{
                    sx: {
                      background:
                        "linear-gradient(to right bottom, #0A3752, #056CA4)",
                      color: "#eff3f7",
                      "&:hover": {
                        a: "#FFF",
                      },
                    },
                  }}
                  open
                >
                  {drawer}
                </Drawer>
              </Box>
            )}
          <Box
            component="main"
            sx={{
              backgroundColor: "BgContent.main",
              flexGrow: 1,
              p: location.pathname === "/" ? 0 : 3, // Conditionally set "p" property
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={fr}
            >
              <SignUpContextProvider>
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
                  <Route path="/charte" element={<Charte />} />
                </Routes>
              </SignUpContextProvider>
            </LocalizationProvider>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

// Définit les types de données attendus pour les props du composant ResponsiveDrawer.
ResponsiveDrawer.propTypes = {
  window: PropTypes.func, // La prop 'window' doit être une fonction.
};

// Définit les valeurs par défaut des props du composant ResponsiveDrawer.
ResponsiveDrawer.defaultProps = {
  window: undefined, // La valeur par défaut de la prop 'window' est undefined.
};

export default ResponsiveDrawer;
