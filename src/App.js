import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardScreen from "./pages/DashboardScreen";
import ProductsScreen from "./pages/ProductsScreen";
import RefillsScreen from "./pages/RefillsScreen";
import ManagementScreen from "./pages/ManagementScreen";
import GasTypeScreen from "./pages/GasTypeScreen";
import { GasTypeProvider } from "./components/gasTypes/GasTypeContext";
import { ProductProvider } from "./components/products/ProductContext";
import { RefillProvider } from "./components/refills/RefillContext";
import TopBar from "./components/TopBar/TopBar";
import BottomBar from "./components/BottomBar/BottomBar";
import InventoryScreen from "./pages/InventoryScreen";
import AnalyticsScreen from "./pages/AnalyticsScreen";
import { AlertsProvider } from "./components/alerts/Alerts";

const App = () => (
  <Router>
    <AlertsProvider>
      <GasTypeProvider>
        <ProductProvider>
          <RefillProvider>
            <TopBar />
            <Routes>
              <Route path="/" element={<DashboardScreen />} />
              <Route path="/products" element={<ProductsScreen />} />
              <Route path="/refills" element={<RefillsScreen />} />
              <Route path="/management" element={<ManagementScreen />} />
              <Route path="/gastype" element={<GasTypeScreen />} />
              <Route path="/inventory" element={<InventoryScreen />} />
              <Route path="/analytics" element={<AnalyticsScreen />} />
            </Routes>
            <BottomBar />
          </RefillProvider>
        </ProductProvider>
      </GasTypeProvider>
    </AlertsProvider>
  </Router>
);

export default App;
