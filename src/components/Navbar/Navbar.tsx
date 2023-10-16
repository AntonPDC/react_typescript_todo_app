import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const navToBabyDashboard = () => {
    navigate("/baby-dashboard");
  };

  const navToCodingDashboard = () => {
    navigate("/coding-dashboard");
  };

  return (
    <div className="navbarContainer">
      <Button buttonText="Baby List" handleClick={navToBabyDashboard} />
      <Button buttonText="Coding List" handleClick={navToCodingDashboard} />
    </div>
  );
}

export default Navbar;
