import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { AccountCircleOutlined } from "@mui/icons-material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [user] = useAuthState(auth);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar
        style={{ backgroundColor: "white", color: "black", padding: "10px" }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4">Crystal Gas</Typography>
          <Typography variant="body2" color="gray">
            Gas management made easy
          </Typography>
        </Box>
        {user && (
          <div>
            <IconButton
              edge="end"
              aria-label="acconut of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
              sx={{
                fontSize: 40,
                marginRight: 1,
              }}
            >
              <AccountCircleOutlined sx={{ fontSize: "inherit" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem disabled>{user.email}</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
