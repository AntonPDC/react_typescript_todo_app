import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BabyDashboard from "./screens/Dashboard/BabyDashboard";
import CodingDashboard from "./screens/Dashboard/CodingDashboard";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/baby-dashboard" element={<BabyDashboard />} />
        <Route path="/coding-dashboard" element={<CodingDashboard />} />
        <Route path="*" element={<Navigate to="/coding-dashboard" replace />} />
      </Routes>
    </>
  );
}

export default App;
