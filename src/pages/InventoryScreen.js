import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useProducts } from "../components/products/ProductContext";
import { useRefills } from "../components/refills/RefillContext";

const InventoryScreen = () => {
  const { products } = useProducts();
  const { refills } = useRefills();
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    // Calculate inventory based on refills
    const initialInventory = products.map((product) => {
      const totalQuantity = refills.reduce((acc, refill) => {
        const selectedProduct = refill.selectedProducts.find(
          (p) => p.id === product.id
        );
        if (selectedProduct) {
          return acc + selectedProduct.quantity;
        }
        return acc;
      }, 0);
      return { ...product, quantity: product.quantity - totalQuantity };
    });
    setInventory(initialInventory);
  }, [products, refills]);

  return (
    <Container style={{ marginTop: "20px" }}>
      <Typography variant="h6" color="black" gutterBottom>
        Inventory
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Product Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Size</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventory.map((product) => (
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
