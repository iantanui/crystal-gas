import React from "react";
import DashboardCard from "../components/dashboard/DashboardCard";
import { Container, Grid, Typography } from "@mui/material";
import { useProducts } from "../components/products/ProductContext";
import { useRefills } from "../components/refills/RefillContext";
import { useGasTypes } from "../components/gasTypes/GasTypeContext";
import { AttachMoney, List, Menu, Person } from "@mui/icons-material";

const DashboardScreen = () => {
  const { products } = useProducts();
  const { refills } = useRefills();
  const { gasTypes } = useGasTypes();

  const totalProducts = products ? products.length : 0;
  const totalRefills = refills ? refills.length : 0;

  const totalCustomers = refills
    ? [...new Set(refills.map((refill) => refill.customerName))].length
    : 0;

  // Calculate gross revenue
  const grossRevenue = refills
    ? refills.reduce((acc, refill) => {
        const refillTotal = refill.selectedProducts
          ? refill.selectedProducts.reduce((sum, product) => {
              const productSellingPrice = products.find(
                (p) => p.id === product.id
              )?.sellingPrice;
              const productTotal = productSellingPrice * product.quantity;
              return sum + productTotal;
            }, 0)
          : 0;
        return acc + refillTotal;
      }, 0)
    : 0;

  // Calculate net revenue
  const netRevenue = refills
    ? refills.reduce((acc, refill) => {
        const refillTotal = refill.selectedProducts
          ? refill.selectedProducts.reduce((sum, product) => {
              const productData = products.find((p) => p.id === product.id);
              const productSellingPrice = productData?.sellingPrice || 0;
              const gasType = gasTypes.find((g) => g.name === product.name);
              const gasTypeBuyingPrice =
                product.size === "6kg"
                  ? gasType?.buyingPrice6kg
                  : gasType?.buyingPrice13kg;
              const productNetRevenue =
                (productSellingPrice - gasTypeBuyingPrice) * product.quantity;
              return sum + productNetRevenue;
            }, 0)
          : 0;
        return acc + refillTotal;
      }, 0)
    : 0;

  console.log("Products:", products);
  console.log("Refills:", refills);

  console.log("Gross Revenue:", grossRevenue);
  console.log("Net Revenue:", netRevenue);

  return (
    <Container style={{ margin: "20px 0 60px 0" }}>
      <Typography variant="h6" color="black" gutterBottom>
        Summary
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <DashboardCard
            icon={<List />}
            label="Total Products"
            value={totalProducts}
            bottom="Products in the shop"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <DashboardCard
            icon={<Menu />}
            label="Total Refills"
            value={totalRefills}
            bottom="Refills done"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <DashboardCard
            icon={<Person />}
            label="Total Customers"
            value={totalCustomers}
            bottom="Customers"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <DashboardCard
            icon={<AttachMoney />}
            label="Gross Revenue"
            value={`KES ${grossRevenue}`}
            bottom="Total gross revenue"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <DashboardCard
            icon={<AttachMoney />}
            label="Net Revenue"
            value={`KES ${netRevenue}`}
            bottom="Total net revenue"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardScreen;
