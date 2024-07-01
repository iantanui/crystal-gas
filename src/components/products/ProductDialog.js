import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import { useProduct } from './ProductContext';

const ProductDialog = ({ open, onClose, product, isEdit }) => {
  const { addProduct, updateProduct } = useProduct();
  const [name, setName] = useState(product ? product.name : '');
  const [price, setPrice] = useState(product ? product.price : '');

  const handleSubmit = () => {
    const newProduct = { name, price };
    if (isEdit) {
      updateProduct(product.index, newProduct);
    } else {
      addProduct(newProduct);
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{isEdit ? 'Edit Product' : 'Add Product'}</DialogTitle>
      <DialogContent>
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
        <TextField label="Price" value={price} onChange={(e) => setPrice(e.target.value)} fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>{isEdit ? 'Update' : 'Add'}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDialog;
