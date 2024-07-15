import React, { createContext, useState, useContext } from "react";

const GasTypeContext = createContext();

export const useGasTypes = () => useContext(GasTypeContext);

export const GasTypeProvider = ({ children }) => {
  const [gasTypes, setGasTypes] = useState([]);

  const addGasType = (name, buyingPrice6kg, buyingPrice13kg) => {
    const newGasType = {
      id: Date.now().toString(),
      name,
      buyingPrice6kg,
      buyingPrice13kg,
      timestamp: new Date().toISOString(),
    };
    setGasTypes((prevGasTypes) => [...prevGasTypes, newGasType]);
  };

  const deleteGasType = (id) => {
    setGasTypes((prevGasTypes) =>
      prevGasTypes.filter((gasType) => gasType.id !== id)
    );
  };

  const updateGasType = (id, name, buyingPrice6kg, buyingPrice13kg) => {
    setGasTypes((prevGasTypes) =>
      prevGasTypes.map((gasType) =>
        gasType.id === id
          ? { ...gasType, name, buyingPrice6kg, buyingPrice13kg, timestamp: new Date().toISOString() }
          : gasType
      )
    );
  };

  return (
    <GasTypeContext.Provider
      value={{ gasTypes, addGasType, updateGasType, deleteGasType }}
    >
      {children}
    </GasTypeContext.Provider>
  );
};
