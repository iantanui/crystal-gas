import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const DashboardCard = ({ title, value }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="h4">{value}</Typography>
    </CardContent>
  </Card>
);

export default DashboardCard;
