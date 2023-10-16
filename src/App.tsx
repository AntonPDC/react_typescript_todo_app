import "./App.css";
import ChoresDashboard from "./screens/Dashboard/ChoresDashboard";
import Navbar from "./components/Navbar/Navbar";
import BabyDashboard from "./screens/Dashboard/BabyDashboard";
import CodingDashboard from "./screens/Dashboard/CodingDashboard";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/baby-dashboard" element={<BabyDashboard />} />
        <Route path="/coding-dashboard" element={<CodingDashboard />} />
        <Route path="/chores-dashboard" element={<ChoresDashboard />} />
        <Route path="*" element={<Navigate to="/coding-dashboard" replace />} />
      </Routes>
    </>
  );
}

export default App;
