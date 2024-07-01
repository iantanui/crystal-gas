import React, { useState } from 'react';
import { Container, List, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RefillItem from '../components/refills/RefillItem';
import RefillDialog from '../components/refills/RefillDialog';
import { useRefill } from '../components/refills/RefillContext';

const RefillsScreen = () => {
  const { refills } = useRefill();
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <List>
        {refills.map((refill, index) => (
          <RefillItem key={index} refill={refill} />
        ))}
      </List>
      <Fab color="primary" aria-label="add" onClick={() => setOpen(true)}>
        <AddIcon />
      </Fab>
      <RefillDialog open={open} onClose={() => setOpen(false)} />
    </Container>
  );
};

export default RefillsScreen;
