import * as React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { sidebarItems, sidebarItemsGuest } from "../data/sidebarItems";
import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

function Sidebar(props) {
  const { window, isLoggedIn } = props;
  const classes = useStyles();

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {isLoggedIn
          ? sidebarItems.map((item) => (
              <ListItemButton
                key={item.id}
                component={Link}
                to={item.url}
                sx={{ textDecoration: "none" }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ))
          : sidebarItemsGuest.map((item) => (
              <ListItemButton
                key={item.id}
                component={Link}
                to={item.url}
                sx={{ textDecoration: "none" }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Drawer
      container={container}
      variant="temporary"
      anchor="left"
      open={props.mobileOpen}
      onClose={props.handleDrawerToggle}
      classes={{
        root: classes.drawer,
        paper: classes.drawerPaper,
      }}
      ModalProps={{
        keepMounted: true,
      }}
    >
      {drawer}
    </Drawer>
  );
}

Sidebar.propTypes = {
  window: PropTypes.func,
  isLoggedIn: PropTypes.bool.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default Sidebar;
