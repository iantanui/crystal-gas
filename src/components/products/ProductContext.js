import React, { createContext, useState, useContext } from "react";
import { useAlerts } from "../alerts/AlertsContext";

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { addAlert } = useAlerts();

  const addProduct = (name, size, sellingPrice, quantity) => {
    const newProduct = {
      id: Date.now().toString(),
      name,
      size,
      sellingPrice,
      quantity,
      timestamp: new Date().toISOString(),
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    addAlert(`Product ${name} added successfully!`, "success");
  };

  const updateProduct = (id, name, size, sellingPrice, quantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              name,
              size,
              sellingPrice,
              quantity,
              timestamp: new Date().toISOString(),
            }
          : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
