import React, { useState } from 'react';
import { Container, List, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ProductItem from '../components/products/ProductItem';
import ProductDialog from '../components/products/ProductDialog';
import { useProduct } from '../components/products/ProductContext';

const ProductsScreen = () => {
  const { products } = useProduct();
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <List>
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </List>
      <Fab color="primary" aria-label="add" onClick={() => setOpen(true)}>
        <AddIcon />
      </Fab>
      <ProductDialog open={open} onClose={() => setOpen(false)} />
    </Container>
  );
};

export default ProductsScreen;
