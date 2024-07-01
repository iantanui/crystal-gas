import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const TopBar = () => (
  <AppBar position="static">
    <Toolbar style={{ backgroundColor: 'white', color: 'black', padding: '10px'}}>
      <Box>
        <Typography variant="h4">Crystal Gas</Typography>
        <Typography variant="p" color={ "gray"}>Gas management made easy</Typography>
      </Box>
    </Toolbar>
  </AppBar>
);

export default TopBar;
