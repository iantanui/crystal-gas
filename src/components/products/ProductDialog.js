import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useGasTypes } from "../gasTypes/GasTypeContext";

const ProductDialog = ({ open, onClose, product, onSave }) => {
  const [name, setName] = useState(product ? product.name : "");
  const [size, setSize] = useState(product ? product.size : "");
  const [sellingPrice, setSellingPrice] = useState(product ? product.sellingPrice : "");
  const [quantity, setQuantity] = useState(product ? product.quantity : "");

  const { gasTypes } = useGasTypes();

  useEffect(() => {
    if (product) {
      setName(product.name);
      setSize(product.size);
      setSellingPrice(product.sellingPrice);
      setQuantity(product.quantity);
    }
  }, [product]);

  const handleSave = () => {
    onSave(name, size, parseFloat(sellingPrice), parseInt(quantity));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{product ? "Edit Product" : "Add Product"}</DialogTitle>
      <DialogContent>
        <FormControl fullWidth margin="dense">
          <InputLabel>Gas Type</InputLabel>
          <Select
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
            {gasTypes.map((gasType) => (
              <MenuItem key={gasType.id} value={gasType.name}>
                {gasType.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="dense">
          <InputLabel>Size</InputLabel>
          <Select
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <MenuItem value="6kg">6kg</MenuItem>
            <MenuItem value="13kg">13kg</MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin="dense"
          label="Price"
          type="number"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          {product ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDialog;
