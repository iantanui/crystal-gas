import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";

const AnalyticsScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Data",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Analytics
      </Typography>
      <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth">
        <Tab label="Refills" />
        <Tab label="Revenue" />
        <Tab label="Customers" />
      </Tabs>
      <Box sx={{ pt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {tabIndex === 0 && (
              <Box>
                <Typography variant="h5" gutterBottom>
                  Refills
                </Typography>
                <Line data={chartData} options={chartOptions} />
              </Box>
            )}
            {tabIndex === 1 && (
              <Box>
                <Typography variant="h5" gutterBottom>
                  Revenue
                </Typography>
                <Line data={chartData} options={chartOptions} />
              </Box>
            )}
            {tabIndex === 2 && (
              <Box>
                <Typography variant="h5" gutterBottom>
                  Customers
                </Typography>
                <Line data={chartData} options={chartOptions} />
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AnalyticsScreen;
