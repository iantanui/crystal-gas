import React, { createContext, useState, useContext } from "react";
import { useAlerts } from "../alerts/AlertsContext";

const GasTypeContext = createContext();

export const useGasTypes = () => useContext(GasTypeContext);

export const GasTypeProvider = ({ children }) => {
  const [gasTypes, setGasTypes] = useState([]);
  const { addAlert } = useAlerts();

  const addGasType = (name, buyingPrice6kg, buyingPrice13kg) => {
    const newGasType = {
      id: Date.now().toString(),
      name,
      buyingPrice6kg,
      buyingPrice13kg,
      timestamp: new Date().toISOString(),
    };
    setGasTypes((prevGasTypes) => [...prevGasTypes, newGasType]);
    addAlert(`${name} added!`, "success")
  };

  const deleteGasType = (id) => {
    const gasTypeToDelete = gasTypes.find((gasType) => gasType.id === id);
    setGasTypes((prevGasTypes) =>
      prevGasTypes.filter((gasType) => gasType.id !== id)
    );
    addAlert(`${gasTypeToDelete.name} deleted!`, "success")
  };

  const updateGasType = (id, name, buyingPrice6kg, buyingPrice13kg) => {
    setGasTypes((prevGasTypes) =>
      prevGasTypes.map((gasType) =>
        gasType.id === id
          ? { ...gasType, name, buyingPrice6kg, buyingPrice13kg, timestamp: new Date().toISOString() }
          : gasType
      )
    );
    addAlert(`${name} updated!`, "success")
  };

  return (
    <GasTypeContext.Provider
      value={{ gasTypes, addGasType, updateGasType, deleteGasType }}
    >
      {children}
    </GasTypeContext.Provider>
  );
};
