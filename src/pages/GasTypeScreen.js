import React, { useState } from "react";
import { Container, Typography, Button, List } from "@mui/material";
import GasTypeItem from "../components/gasTypes/GasTypesItem";
import GasTypeDialog from "../components/gasTypes/GasTypesDialog";
import { useGasTypes } from "../components/gasTypes/GasTypeContext";

function GasTypesScreen() {
  const { gasTypes, addGasType, deleteGasType, updateGasType } = useGasTypes();
  const [showDialog, setShowDialog] = useState(false);
  const [currentGasType, setCurrentGasType] = useState(null);

  const handleSave = (name, buyingPrice6kg, buyingPrice13kg) => {
    if (currentGasType) {
      updateGasType(
        currentGasType.id,
        name,
        buyingPrice6kg,
        buyingPrice13kg
      );
    } else {
      addGasType(name, buyingPrice6kg, buyingPrice13kg);
    }
    setShowDialog(false);
    setCurrentGasType(null);
  };

  return (
    <Container style={{ padding: "0" }}>
      <Typography variant="h6" style={{ textAlign: "left" }}>
        Gas Types
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
        Add Gas Type
      </Button>

      <List>
        {gasTypes
          .slice()
          .reverse()
          .map((gasType, index) => (
            <React.Fragment key={gasType.id}>
              <GasTypeItem
                index={index}
                gasType={gasType}
                onEdit={() => {
                  setCurrentGasType(gasType);
                  setShowDialog(true);
                }}
                onDelete={() => deleteGasType(gasType.id)}
              />
            </React.Fragment>
          ))}
      </List>

      <GasTypeDialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        gasType={currentGasType}
        onSave={handleSave}
      />
    </Container>
  );
}

export default GasTypesScreen;
