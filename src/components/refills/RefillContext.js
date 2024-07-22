import React, { createContext, useState, useContext } from "react";
import { useAlerts } from "../alerts/AlertsContext";

const RefillContext = createContext();

export const useRefills = () => useContext(RefillContext);

export const RefillProvider = ({ children }) => {
  const [refills, setRefills] = useState([]);
  const { addAlert } = useAlerts();

  const addRefill = (customerName, phoneNumber, selectedProducts) => {
    const newRefill = {
      id: Date.now().toString(),
      customerName,
      phoneNumber,
      selectedProducts,
      timestamp: new Date().toISOString(),
    };
    setRefills((prevRefills) => [...prevRefills, newRefill]);
    addAlert(`Refill for ${customerName} added!`, "success");
  };

  const updateRefill = (id, customerName, phoneNumber, selectedProducts) => {
    setRefills((prevRefills) =>
      prevRefills.map((refill) =>
        refill.id === id
          ? {
              ...refill,
              customerName,
              phoneNumber,
              selectedProducts,
              timestamp: new Date().toISOString(),
            }
          : refill
      )
    );
    addAlert(`Refill for ${customerName} updated!`, "success");
  };

  const deleteRefill = (id) => {
    const refillToDelete = refills.find((refill) => refill.id === id);
    setRefills((prevRefills) =>
      prevRefills.filter((refill) => refill.id !== id)
    );
    addAlert(`Refill for ${refillToDelete.customerName} deleted!`, "success");
  };

  return (
    <RefillContext.Provider
      value={{ refills, addRefill, updateRefill, deleteRefill }}
    >
      {children}
    </RefillContext.Provider>
  );
};
