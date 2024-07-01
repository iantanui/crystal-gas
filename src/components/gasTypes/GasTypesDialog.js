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
  const [wholesalePrice6kg, setWholesalePrice6kg] = useState("");
  const [wholesalePrice13kg, setWholesalePrice13kg] = useState("");

  useEffect(() => {
    if (gasType) {
      setName(gasType.name);
      setWholesalePrice6kg(gasType.wholesalePrice6kg);
      setWholesalePrice13kg(gasType.wholesalePrice13kg);
    } else {
      setName("");
      setWholesalePrice6kg("");
      setWholesalePrice13kg("");
    }
  }, [gasType]);

  const handleSave = () => {
    onSave(name, parseInt(wholesalePrice6kg), parseInt(wholesalePrice13kg));
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
          value={wholesalePrice6kg}
          onChange={(e) => setWholesalePrice6kg(e.target.value)}
          fullWidth
        />
        <TextField
          margin="dense"
          label="13 kg Wholesale Price"
          type="number"
          value={wholesalePrice13kg}
          onChange={(e) => setWholesalePrice13kg(e.target.value)}
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
