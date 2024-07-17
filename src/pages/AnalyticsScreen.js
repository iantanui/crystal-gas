import React, { useState } from 'react';
import { Container, Tab, Tabs, Typography, Box } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { useRefills } from '../components/refills/RefillContext';

const AnalyticsScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { refills } = useRefills();

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const generateData = (type) => {
    if (type === 'Customers') {
      return {
        xAxis: refills.map((refill, index) => index + 1),
        series: [
          {
            data: refills.map((refill) => refill.customerName.length),
          },
        ],
      };
    }
    if (type === 'Revenue') {
      return {
        xAxis: refills.map((refill, index) => index + 1),
        series: [
          {
            data: refills.map((refill) =>
              refill.selectedProducts.reduce((acc, product) => {
                const sellingPrice = product.sellingPrice || 0;
                return acc + product.quantity * sellingPrice;
              }, 0)
            ),
          },
        ],
      };
    }
    if (type === 'Refills') {
      return {
        xAxis: refills.map((refill, index) => index + 1),
        series: [
          {
            data: refills.map((refill) => refill.selectedProducts.length),
          },
        ],
      };
    }
    return { xAxis: [], series: [{ data: [] }] };
  };

  const renderChart = (type) => {
    const { xAxis, series } = generateData(type);
    return (
      <LineChart
        xAxis={[{ data: xAxis }]}
        series={series}
        width={500}
        height={300}
      />
    );
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Analytics
      </Typography>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Customers" />
        <Tab label="Revenue" />
        <Tab label="Refills" />
      </Tabs>
      <Box mt={3}>
        {tabIndex === 0 && renderChart('Customers')}
        {tabIndex === 1 && renderChart('Revenue')}
        {tabIndex === 2 && renderChart('Refills')}
      </Box>
    </Container>
  );
};

export default AnalyticsScreen;
