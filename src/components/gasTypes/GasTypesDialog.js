import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useGasType } from "./GasTypeContext";

const GasTypesDialog = ({ open, onClose, gasType, isEdit }) => {
  const { addGasType, updateGasType } = useGasType();
  const [name, setName] = useState(gasType ? gasType.name : "");
  const [buyingPrice6kg, setBuyingPrice6kg] = useState(
    gasType ? gasType.buyingPrice6kg : ""
  );
  const [buyingPrice13kg, setBuyingPrice13kg] = useState(
    gasType ? gasType.buyingPrice13kg : ""
  );

  const handleSubmit = () => {
    const newGasType = { name, buyingPrice6kg, buyingPrice13kg };
    if (isEdit) {
      updateGasType(gasType.index, newGasType);
    } else {
      addGasType(newGasType);
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{isEdit ? "Edit Gas Type" : "Add Gas Type"}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          type="text"
          label="Gas Type Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
        autoFocus
          margin="dense"
          type="number"
          label="6kg Buying Price"
          value={buyingPrice6kg}
          onChange={(e) => setBuyingPrice6kg(e.target.value)}
          fullWidth
        />
        <TextField
        autoFocus
          margin="dense"
          type="number"
          label="13kg Buying Price"
          value={buyingPrice13kg}
          onChange={(e) => setBuyingPrice13kg(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>{isEdit ? "Update" : "Add"}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default GasTypesDialog;
