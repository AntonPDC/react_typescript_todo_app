import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbarContainer">
      <Button
        buttonText="Baby List"
        handleClick={() => navigate("/baby-dashboard")}
      />
      <Button
        buttonText="Coding List"
        handleClick={() => navigate("/coding-dashboard")}
      />
      <Button
        buttonText="Chores List"
        handleClick={() => navigate("/chores-dashboard")}
      />
    </div>
  );
}

export default Navbar;
