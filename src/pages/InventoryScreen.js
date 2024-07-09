import React from "react";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useProducts } from "../components/products/ProductContext";

const InventoryScreen = () => {
  const { products } = useProducts();

  return (
    <Container style={{ marginTop: "20px" }}>
      <Typography variant="h6" color="black" gutterBottom>
        Inventory
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Gas name</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Size</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.size}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                {product.quantity <= 5 && (
                  <TableCell style={{ color: "red" }}>Low Stock!</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default InventoryScreen;
