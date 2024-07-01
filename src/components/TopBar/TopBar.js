import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const TopBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Crystal Gas Management</Typography>
    </Toolbar>
  </AppBar>
);

export default TopBar;
