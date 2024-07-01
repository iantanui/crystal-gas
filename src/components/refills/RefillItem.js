import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

const RefillItem = ({ refill }) => (
  <ListItem>
    <ListItemText primary={refill.name} secondary={`Quantity: ${refill.quantity}`} />
  </ListItem>
);

export default RefillItem;
