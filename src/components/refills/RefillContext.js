import React, { createContext, useState, useContext } from 'react';

const RefillContext = createContext();

export const useRefill = () => useContext(RefillContext);

export const RefillProvider = ({ children }) => {
  const [refills, setRefills] = useState([]);

  const addRefill = (refill) => {
    setRefills([...refills, refill]);
  };

  const updateRefill = (index, updatedRefill) => {
    const newRefills = [...refills];
    newRefills[index] = updatedRefill;
    setRefills(newRefills);
  };

  return (
    <RefillContext.Provider value={{ refills, addRefill, updateRefill }}>
      {children}
    </RefillContext.Provider>
  );
};
