import "./Input.css";

interface InputProps {
  onChange: (value: string) => void;
  placeholder: string;
  type?: "date" | "email" | "password" | "text";
}

function Input({ onChange, placeholder, type = "text" }: InputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <input type={type} placeholder={placeholder} onChange={handleInputChange} />
  );
}

export default Input;
