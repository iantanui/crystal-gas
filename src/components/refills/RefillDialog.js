import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import { useRefill } from './RefillContext';

const RefillDialog = ({ open, onClose, refill, isEdit }) => {
  const { addRefill, updateRefill } = useRefill();
  const [name, setName] = useState(refill ? refill.name : '');
  const [quantity, setQuantity] = useState(refill ? refill.quantity : '');

  const handleSubmit = () => {
    const newRefill = { name, quantity };
    if (isEdit) {
      updateRefill(refill.index, newRefill);
    } else {
      addRefill(newRefill);
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{isEdit ? 'Edit Refill' : 'Add Refill'}</DialogTitle>
      <DialogContent>
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
        <TextField label="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>{isEdit ? 'Update' : 'Add'}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RefillDialog;
