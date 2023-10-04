import "./Button.css";

interface ButtonProps {
  buttonText: string;
  handleClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "warn";
}

function Button({
  buttonText,
  handleClick,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  const getClass = (
    variant: "primary" | "secondary" | "warn",
    disabled: boolean
  ): string => {
    if (disabled) {
      return "btn-disabled";
    }
    if (variant === "secondary") {
      return "btn-success";
    }
    if (variant === "warn") {
      return "btn-warn";
    }
    return "btn-primary";
  };
  return (
    <button className={getClass(variant, disabled)} onClick={handleClick}>
      {" "}
      {buttonText}{" "}
    </button>
  );
}

export default Button;
