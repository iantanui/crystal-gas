import React from 'react';
import DashboardCard from '../components/dashboard/DashboardCard';
import { Container, Grid } from '@mui/material';

const DashboardScreen = () => (
  <Container>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <DashboardCard title="Total Revenue" value="$0" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DashboardCard title="Total Refills" value="0" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DashboardCard title="Inventory Value" value="$0" />
      </Grid>
    </Grid>
  </Container>
);

export default DashboardScreen;
