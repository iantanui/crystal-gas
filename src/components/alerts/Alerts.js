import React from "react";
import { useAlerts } from "./AlertsContext";
import { Alert, AlertTitle } from "@mui/material";

const Alerts = () => {
  const { alerts, removeAlert } = useAlerts();

  return (
    <div style={{ position: "fixed", bottom: 10, right: 10, zIndex: 1000 }}>
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          severity={alert.type}
          onClose={() => removeAlert(alert.id)}
        >
          <AlertTitle>
            {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}
          </AlertTitle>
          {alert.message}
        </Alert>
      ))}
    </div>
  );
};

export default Alerts;
