import React, { useState } from 'react';
import { Container, List, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import GasTypesItem from '../components/gasTypes/GasTypesItem';
import GasTypesDialog from '../components/gasTypes/GasTypesDialog';
import { useGasType } from '../components/gasTypes/GasTypeContext';

const GasTypeScreen = () => {
  const { gasTypes } = useGasType();
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <List>
        {gasTypes.map((gasType, index) => (
          <GasTypesItem key={index} gasType={gasType} />
        ))}
      </List>
      <Fab color="primary" aria-label="add" onClick={() => setOpen(true)}>
        <AddIcon />
      </Fab>
      <GasTypesDialog open={open} onClose={() => setOpen(false)} />
    </Container>
  );
};

export default GasTypeScreen;
