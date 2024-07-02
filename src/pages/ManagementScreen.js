import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import GasTypeScreen from "./GasTypeScreen";
import RefillsScreen from "./RefillsScreen";
import ProductsScreen from "./ProductsScreen";
import TabPanel from "../components/TabPanel";

const ManagementScreen = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box style={{ marginTop: "10px" }}>
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="management tabs"
        textColor="black"
        scrollButtons="auto"
        allowScrollButtonsMobile
      >
        <Tab label="GasTypes" />
        <Tab label="Products" />
        <Tab label="Refills" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <GasTypeScreen />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProductsScreen />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RefillsScreen />
      </TabPanel>
    </Box>
  );
};

export default ManagementScreen;
