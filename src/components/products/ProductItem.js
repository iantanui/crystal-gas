import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

const ProductItem = ({ product }) => (
  <ListItem>
    <ListItemText primary={product.name} secondary={`Price: ${product.price}`} />
  </ListItem>
);

export default ProductItem;
