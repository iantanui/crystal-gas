import React, { createContext, useState, useContext } from "react";

const RefillContext = createContext();

export const useRefills = () => useContext(RefillContext);

export const RefillProvider = ({ children }) => {
  const [refills, setRefills] = useState([]);

  const addRefill = (customerName, phoneNumber, selectedProducts) => {
    const newRefill = {
      id: Math.floor(Math.random() * 1000) + 1,
      customerName,
      phoneNumber,
      selectedProducts,
    };
    setRefills([...refills, newRefill]);
  };

  const updateRefill = (id, customerName, phoneNumber, selectedProducts) => {
    const updatedRefills = refills.map((refill) =>
      refill.id === id
        ? { ...refill, customerName, phoneNumber, selectedProducts }
        : refill
    );
    setRefills(updatedRefills);
  };

  const deleteRefill = (id) => {
    const updatedRefills = refills.filter((refill) => refill.id !== id);
    setRefills(updatedRefills);
  };

  return (
    <RefillContext.Provider
      value={{ refills, addRefill, updateRefill, deleteRefill }}
    >
      {children}
    </RefillContext.Provider>
  );
};
