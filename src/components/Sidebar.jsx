import {
  AccountBox,
  DarkMode,
  Diversity3,
  Group,
  Home,
  LightMode,
  Pages,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

function Sidebar({ displaySidebar, setThemeMode }) {
  // const [displayBar, setDisplayBar] = useState(displaySidebar);
  // useEffect(() => {
  //   console.log("displaySidebar - ", displayBar);
  //   setDisplayBar(displaySidebar);
  // }, [displaySidebar]);

  const [darkMode, setDarkMode] = useState(false);
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { xs: displaySidebar ? "contents" : "none", sm: "block" },
      }}
    >
      <Box
        position="fixed"
        sx={{
          // backgroundColor: { xs: displaySidebar ? "gray" : "#FFF", sm: "#FFF" },
          zIndex: { xs: displaySidebar ? 100 : "auto", sm: "auto" },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Pages />
              </ListItemIcon>
              <ListItemText primary="Page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Diversity3 />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LightMode sx={{ display: darkMode ? "none" : "block" }} />
                <DarkMode sx={{ display: darkMode ? "block" : "none" }} />
              </ListItemIcon>
              <Switch
                onChange={() => {
                  setDarkMode(!darkMode);
                  setThemeMode();
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <Typography>
              Developed by <br></br>Ayyanar Jayabalan
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
