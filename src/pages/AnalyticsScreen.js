import { Container, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

const AnalyticsScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTanChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Container style={{ margin: "20px" }}>
      <Typography variant="h6" color="black" gutterBottom>
        Analytics
      </Typography>
      <Tabs value={tabIndex} onChange={handleTanChange}>
        <Tab label="Customers" />
        <Tab value="Revenue" />
        <Tab value="Refills" />
      </Tabs>
    </Container>
  );
};

export default AnalyticsScreen;
