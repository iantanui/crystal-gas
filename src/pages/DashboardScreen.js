import React from "react";
import DashboardCard from "../components/dashboard/DashboardCard";
import { Container, Grid, Typography } from "@mui/material";
import { useProducts } from "../components/products/ProductContext";
import { useRefills } from "../components/refills/RefillContext";

const DashboardScreen = () => {
  const { products } = useProducts;
  const { refills } = useRefills;

  const totalProducts = products ? products.length : 0;
  const totalRefills = refills ? refills.length : 0;
  const totalCustomers = refills
    ? [...new Set(refills.map((refill) => refill.customerName))].length
    : 0;

  return (
    <Container style={{ marginTop: "20px" }}>
      <Typography variant="h6" color="black" gutterBottom>
        Summary
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <DashboardCard
            label="Total Products"
            value={totalProducts}
            bottom="Products in the shop"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <DashboardCard
            label="Total Refills"
            value={totalRefills}
            bottom="Refills done"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <DashboardCard
            label="Inventory Value"
            value={totalCustomers}
            bottom="Customers"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardScreen;
