import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const DashboardCard = ({ label, value, bottom }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{label}</Typography>
      <Typography variant="h4">{value}</Typography>
      <Typography variant="caption">{bottom}</Typography>
    </CardContent>
  </Card>
);

export default DashboardCard;
