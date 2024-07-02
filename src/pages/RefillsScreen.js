import React, { useState } from "react";
import { Container, Typography, Button, List } from "@mui/material";
import RefillItem from "../components/refills/RefillItem";
import RefillDialog from "../components/refills/RefillDialog";
import { useRefills } from "../components/refills/RefillContext";

function RefillsScreen() {
  const { refills, addRefill, deleteRefill, updateRefill } = useRefills();
  const [showDialog, setShowDialog] = useState(false);
  const [currentRefill, setCurrentRefill] = useState(null);

  const handleSave = (customerName, phoneNumber, selectedProducts) => {
    if (currentRefill) {
      updateRefill(currentRefill.id, customerName, phoneNumber, selectedProducts);
    } else {
      addRefill(customerName, phoneNumber, selectedProducts);
    }
    setShowDialog(false);
    setCurrentRefill(null);
  };

  return (
    <Container style={{ padding: "0" }}>
      <Typography variant="h6" style={{ textAlign: "left" }}>
        Refills
      </Typography>

      <Button
        variant="contained"
        fullWidth
        style={{ backgroundColor: "black", color: "white", marginBottom: "1rem" }}
        onClick={() => setShowDialog(true)}
      >
        Add Refill
      </Button>

      <List>
        {refills.map((refill) => (
          <RefillItem
            key={refill.id}
            refill={refill}
            onEdit={() => {
              setCurrentRefill(refill);
              setShowDialog(true);
            }}
            onDelete={() => deleteRefill(refill.id)}
          />
        ))}
      </List>

      <RefillDialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        refill={currentRefill}
        onSave={handleSave}
      />
    </Container>
  );
}

export default RefillsScreen;
