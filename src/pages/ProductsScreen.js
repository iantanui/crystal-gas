import React, { useState } from "react";
import { Container, Typography, Button, List } from "@mui/material";
import ProductItem from "../components/products/ProductItem";
import ProductDialog from "../components/products/ProductDialog";
import { useProducts } from "../components/products/ProductContext";
import Alerts from "../components/alerts/Alerts";

function ProductsScreen() {
  const { products, addProduct, deleteProduct, updateProduct } = useProducts();
  const [showDialog, setShowDialog] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleSave = (name, size, sellingPrice, quantity) => {
    if (currentProduct) {
      updateProduct(currentProduct.id, name, size, sellingPrice, quantity);
    } else {
      addProduct(name, size, sellingPrice, quantity);
    }
    setShowDialog(false);
    setCurrentProduct(null);
  };

  return (
    <Container style={{ padding: "0" , marginBottom: '60pxƒ'}}>
      <Typography variant="h6" style={{ textAlign: "left" }}>
        Products
      </Typography>

      <Button
        variant="contained"
        fullWidth
        style={{
          backgroundColor: "black",
          color: "white",
          marginBottom: "1rem",
        }}
        onClick={() => setShowDialog(true)}
      >
        Add Product
      </Button>

      <List>
        {products
          .slice()
          .reverse()
          .map((product, index) => (
            <React.Fragment key={product.id}>
              <ProductItem
                index={index}
                product={product}
                onEdit={() => {
                  setCurrentProduct(product);
                  setShowDialog(true);
                }}
                onDelete={() => deleteProduct(product.id)}
              />
            </React.Fragment>
          ))}
      </List>

      <ProductDialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        product={currentProduct}
        onSave={handleSave}
      />

      <Alerts />
    </Container>
  );
}

export default ProductsScreen;
