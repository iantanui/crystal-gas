import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

const GasTypesItem = ({ gasType }) => (
  <ListItem>
    <ListItemText primary={gasType.name} secondary={`6kg: ${gasType.buyingPrice6kg}, 13kg: ${gasType.buyingPrice13kg}`} />
  </ListItem>
);

export default GasTypesItem;
