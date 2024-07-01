import React, { createContext, useState, useContext } from 'react';

const GasTypeContext = createContext();

export const useGasType = () => useContext(GasTypeContext);

export const GasTypeProvider = ({ children }) => {
  const [gasTypes, setGasTypes] = useState([]);

  const addGasType = (gasType) => {
    setGasTypes([...gasTypes, gasType]);
  };

  const updateGasType = (index, updatedGasType) => {
    const newGasTypes = [...gasTypes];
    newGasTypes[index] = updatedGasType;
    setGasTypes(newGasTypes);
  };

  return (
    <GasTypeContext.Provider value={{ gasTypes, addGasType, updateGasType }}>
      {children}
    </GasTypeContext.Provider>
  );
};
