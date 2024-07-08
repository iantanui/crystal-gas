import React, { createContext, useState, useContext } from "react";

const RefillContext = createContext();

export const useRefills = () => useContext(RefillContext);

export const RefillProvider = ({ children }) => {
  const [refills, setRefills] = useState([]);

  const addRefill = (customerName, phoneNumber, selectedProducts) => {
    const newRefill = {
      id: Date.now().toString(),
      customerName,
      phoneNumber,
      selectedProducts,
    };
    setRefills((prevRefills) => [...prevRefills, newRefill]);
  };

  const updateRefill = (id, customerName, phoneNumber, selectedProducts) => {
    setRefills((prevRefills) =>
      prevRefills.map((refill) =>
        refill.id === id
          ? { ...refill, customerName, phoneNumber, selectedProducts }
          : refill
      )
    );
  };

  const deleteRefill = (id) => {
    setRefills((prevRefills) =>
      prevRefills.filter((refill) => refill.id !== id)
    );
  };

  return (
    <RefillContext.Provider
      value={{ refills, addRefill, updateRefill, deleteRefill }}
    >
      {children}
    </RefillContext.Provider>
  );
};
