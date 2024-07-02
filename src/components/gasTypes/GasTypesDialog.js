import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const GasTypeDialog = ({ open, onClose, gasType, onSave }) => {
  const [name, setName] = useState(gasType ? gasType.name : "");
  const [buyingPrice6kg, setBuyingPrice6kg] = useState("");
  const [buyingPrice13kg, setBuyingPrice13kg] = useState("");

  useEffect(() => {
    if (gasType) {
      setName(gasType.name);
      setBuyingPrice6kg(gasType.buyingPrice6kg);
      setBuyingPrice13kg(gasType.buyingPrice13kg);
    } else {
      setName("");
      setBuyingPrice6kg("");
      setBuyingPrice13kg("");
    }
  }, [gasType]);

  const handleSave = () => {
    onSave(name, parseInt(buyingPrice6kg), parseInt(buyingPrice13kg));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{gasType ? "Edit Gas Type" : "Add Gas Type"}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Gas Type Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          margin="dense"
          label="6 kg Wholesale Price"
          type="number"
          value={buyingPrice6kg}
          onChange={(e) => setBuyingPrice6kg(e.target.value)}
          fullWidth
        />
        <TextField
          margin="dense"
          label="13 kg Wholesale Price"
          type="number"
          value={buyingPrice13kg}
          onChange={(e) => setBuyingPrice13kg(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          {gasType ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GasTypeDialog;
