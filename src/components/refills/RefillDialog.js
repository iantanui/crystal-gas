import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useProducts } from "../products/ProductContext";

const RefillDialog = ({ open, onClose, refill, onSave }) => {
  const [customerName, setCustomerName] = useState(
    refill ? refill.customerName : ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    refill ? refill.phoneNumber : ""
  );
  const [selectedProducts, setSelectedProducts] = useState(
    refill ? refill.selectedProducts : []
  );

  const { products } = useProducts();

  useEffect(() => {
    if (refill) {
      setCustomerName(refill.customerName);
      setPhoneNumber(refill.phoneNumber);
      setSelectedProducts(refill.selectedProducts);
    } else {
      setCustomerName("");
      setPhoneNumber("");
      setSelectedProducts("");
    }
  }, [refill, open]);

  const handleSave = () => {
    onSave(customerName, phoneNumber, selectedProducts);
    setCustomerName("");
    setPhoneNumber("");
    setSelectedProducts("");
    onClose();
  };

  const handleProductToggle = (product) => {
    const currentIndex = selectedProducts.findIndex(
      (item) => item.id === product.id
    );
    if (currentIndex === -1) {
      setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    } else {
      const newSelectedProducts = selectedProducts.filter(
        (item) => item.id !== product.id
      );
      setSelectedProducts(newSelectedProducts);
    }
  };

  const handleQuantityChange = (product, increment) => {
    const updatedProducts = selectedProducts.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + increment }
        : item
    );
    setSelectedProducts(updatedProducts);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{refill ? "Edit Refill" : "Add Refill"}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          fullWidth
        />
        <FormControl fullWidth margin="dense">
          <InputLabel>Products</InputLabel>
          <Select
            multiple
            value={selectedProducts.map((product) => product.id)}
            renderValue={(selected) =>
              selected
                .map((id) => products.find((product) => product.id === id).name)
                .join(", ")
            }
          >
            {products.map((product) => (
              <MenuItem key={product.id} value={product.id}>
                <Checkbox
                  checked={
                    selectedProducts.findIndex(
                      (item) => item.id === product.id
                    ) > -1
                  }
                  onChange={() => handleProductToggle(product)}
                />
                <ListItemText
                  primary={product.name}
                  secondary={`Size: ${product.size}`}
                />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <List>
          {selectedProducts.map((product) => (
            <ListItem key={product.id}>
              <ListItemText
                primary={product.name}
                secondary={`Size: ${product.size}`}
              />
              <IconButton
                onClick={() => handleQuantityChange(product, -1)}
                disabled={product.quantity <= 1}
              >
                <Remove />
              </IconButton>
              {product.quantity}
              <IconButton onClick={() => handleQuantityChange(product, 1)}>
                <Add />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          {refill ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RefillDialog;
