import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

const AnalyticsScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Container style={{ margin: "20px" }}>
      <Typography variant="h6" color="black" gutterBottom>
        Analytics
      </Typography>

      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Customers" />
        <Tab value="Revenue" />
        <Tab value="Refills" />
      </Tabs>

      <Box mt={3}>
        
      </Box>
    </Container>
  );
};

export default AnalyticsScreen;
