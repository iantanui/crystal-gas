import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (index, updatedProduct) => {
    const newProducts = [...products];
    newProducts[index] = updatedProduct;
    setProducts(newProducts);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
