import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";

import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PasswordIcon from "@mui/icons-material/Password";
import GavelIcon from "@mui/icons-material/Gavel";
import PestControlRodentIcon from "@mui/icons-material/PestControlRodent";
import DoNotTouchIcon from "@mui/icons-material/DoNotTouch";

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

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const itemsMenu = [
    { text: "Home", icon: <HomeIcon />, url: "/" },
    { text: "Dashboard", icon: <DashboardIcon />, url: "/dashboard" },
    {
      text: "My Project",
      icon: <AccountTreeIcon />,
      url: "/dashboard/my-project",
    },
    {
      text: "My Setting",
      icon: <SettingsIcon />,
      url: "/dashboard/my-setting",
    },
    {
      text: "My Calendar",
      icon: <CalendarMonthIcon />,
      url: "/dashboard/my-calendar",
    },
    {
      text: "Bourse aux talents",
      icon: <Diversity3Icon />,
      url: "/talent",
    },
    {
      text: "Bourse aux projets",
      icon: <AssuredWorkloadIcon />,
      url: "/project",
    },
    {
      text: "Ajout de projet",
      icon: <AddBoxIcon />,
      url: "/add-project",
    },
  ];

  const itemsMenuGost = [
    { text: "login", icon: <PowerSettingsNewIcon />, url: "/login" },
    { text: "Register", icon: <HowToRegIcon />, url: "/Register" },
    {
      text: "MDP oublié",
      icon: <PasswordIcon />,
      url: "/forgot-password",
    },
    {
      text: "Terms",
      icon: <GavelIcon />,
      url: "/terms",
    },
    {
      text: "CGU",
      icon: <PestControlRodentIcon />,
      url: "/cgu",
    },
    {
      text: "404",
      icon: <DoNotTouchIcon />,
      url: "Ohohoh",
    },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {itemsMenu.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton href={item.url}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {itemsMenuGost.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton href={item.url}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
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
      </Box>
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
