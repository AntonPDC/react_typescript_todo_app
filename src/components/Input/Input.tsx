import "./Input.css";

interface InputProps {
  id: number;
  placeholder: string;
  onChange: (value: string) => void;
}

function Input({ id, placeholder, onChange }: InputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <input
      id={`${id}`}
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
}

export default Input;
