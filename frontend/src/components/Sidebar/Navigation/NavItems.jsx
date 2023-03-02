import * as React from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AddBoxIcon from "@mui/icons-material/AddBox";

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
];

export default function NavItems() {
  return (
    <>
      <List
        sx={{
          color: "NavLink.main",
          "&:hover": {
            color: "#FFF",
          },
        }}
      >
        {itemsMenu.map((item, index) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{
              color: "NavLink.main",
              "&:hover": {
                color: "#FFF",
                backgroundColor: "#ffffff66",
                fontSize: "2rem",
              },
              "&:active": {
                color: "#FFF",
              },
            }}
          >
            <ListItemButton href={item.url}>
              <ListItemIcon
                sx={{
                  color: "NavLink.main",
                  "&:hover": {
                    color: "#FFF",
                  },
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} color="inherit" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {itemsMenuGost.map((item, index) => (
          <ListItem
            key={item.text}
            sx={{
              color: "NavLink.main",
              "&:hover": {
                color: "#FFF",
              },
              "&:active": {
                color: "#FFF",
              },
            }}
            disablePadding
          >
            <ListItemButton href={item.url}>
              <ListItemIcon
                sx={{
                  color: "NavLink.main",
                  "&:hover": {
                    color: "#FFF",
                  },
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
