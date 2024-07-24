import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import DashboardScreen from "./pages/DashboardScreen";
import ProductsScreen from "./pages/ProductsScreen";
import RefillsScreen from "./pages/RefillsScreen";
import ManagementScreen from "./pages/ManagementScreen";
import GasTypeScreen from "./pages/GasTypeScreen";
import { GasTypeProvider } from "./components/gasTypes/GasTypeContext";
import { ProductProvider } from "./components/products/ProductContext";
import { RefillProvider } from "./components/refills/RefillContext";
import InventoryScreen from "./pages/InventoryScreen";
import AnalyticsScreen from "./pages/AnalyticsScreen";
import { AlertsProvider } from "./components/alerts/AlertsContext";
import Alerts from "./components/alerts/Alerts";
import LoginScreen from "./pages/LoginScreen";
import AuthRoute from "./AuthRoute";
import TopBar from "./components/TopBar/TopBar";
import BottomBar from "./components/BottomBar/BottomBar";

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <AlertsProvider>
        <GasTypeProvider>
          <ProductProvider>
            <RefillProvider>
              <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route element={<AuthRoute />}>
                  <Route 
                    path="/*" 
                    element={
                      <>
                        <TopBar />
                        <Routes>
                          <Route path="/dashboard" element={<DashboardScreen />} />
                          <Route path="/products" element={<ProductsScreen />} />
                          <Route path="/refills" element={<RefillsScreen />} />
                          <Route path="/management" element={<ManagementScreen />} />
                          <Route path="/gastype" element={<GasTypeScreen />} />
                          <Route path="/inventory" element={<InventoryScreen />} />
                          <Route path="/analytics" element={<AnalyticsScreen />} />
                          <Route path="/alerts" element={<Alerts />} />
                        </Routes>
                        <BottomBar />
                      </>
                    }
                  />
                </Route>
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            </RefillProvider>
          </ProductProvider>
        </GasTypeProvider>
      </AlertsProvider>
    </Router>
  );
};

export default App;
