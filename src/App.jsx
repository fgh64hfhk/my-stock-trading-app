import { Routes, Route } from "react-router-dom";
import "./App.css";

import NavigationRouter from "./router/NavigationRouter";

import HomePage from "./pages/HomePage";
import StockDashboard from "./pages/StockDashboard";

function App() {
  return (
    <div className="container-fluid">
      <NavigationRouter />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stock" element={<StockDashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
