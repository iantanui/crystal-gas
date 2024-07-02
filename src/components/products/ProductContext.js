import React, { createContext, useState, useContext } from "react";

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (name, size, price, quantity) => {
    const newProduct = {
      id: Math.floor(Math.random() * 1000) + 1,
      name,
      size,
      price,
      quantity,
    };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id, name, size, price, quantity) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, name, size, price, quantity }
        : product
    );
    setProducts(updatedProducts);
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
