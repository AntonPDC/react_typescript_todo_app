import "./App.css";
import Dashboard from "./screens/Dashboard/Dashboard";
import BabyDashboard from "./screens/Dashboard/BabyDashboard/BabyDashboard";
import CodingDashboard from "./screens/Dashboard/CodingDashboard/CodingDashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/babydashboard" element={<BabyDashboard />} />
      <Route path="/codingdashboard" element={<CodingDashboard />} />
    </Routes>
  );
}

export default App;
