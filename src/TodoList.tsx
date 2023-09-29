import { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn typescript you dummy", completed: false },
    { id: 2, text: "You need to change diaper", completed: false },
  ]);
  const [todoText, setTodoText] = useState<string>("");

  const handleToggle = (id: number) => {
    const newTodos: Todo[] = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleClick = () => {
    const newTodo: Todo = { id: Date.now(), text: todoText, completed: false };
    setTodos([...todos, newTodo]);
  };

  const handleInputChange = (value: string) => {
    setTodoText(value);
  };

  return (
    <div className="main-container">
      <h1>TodoList</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {`${todo.text}, ${todo.completed.toString()}`}
          </li>
        ))}
      </ul>
      <Input
        id={Date.now()}
        placeholder="Enter Todo Item"
        onChange={handleInputChange}
      />
      <Button buttonText="Add" handleClick={handleClick} />
    </div>
  );
};
