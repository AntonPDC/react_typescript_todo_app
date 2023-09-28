import "./Button.css";

interface ButtonProps {
  buttonText: string;
  handleClick: () => void;
}

function Button({ buttonText, handleClick }: ButtonProps) {
  return <button onClick={handleClick}> {buttonText} </button>;
}

export default Button;
