import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

interface NavbarBtn {
  buttonText: string;
  route: string;
}

function Navbar() {
  const navigate = useNavigate();
  const buttons: NavbarBtn[] = [
    {
      buttonText: "Baby List",
      route: "/baby-dashboard",
    },
    {
      buttonText: "Coding List",
      route: "/coding-dashboard",
    },
    {
      buttonText: "Chores List",
      route: "/chores-dashboard",
    },
  ];
  return (
    <div className="navbarContainer">
      {buttons.map((btn) => (
        <Button
          buttonText={btn.buttonText}
          handleClick={() => navigate(btn.route)}
        />
      ))}
    </div>
  );
}

export default Navbar;
