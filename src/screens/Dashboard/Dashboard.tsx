import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import TodoList, { Todo } from "../../components/TodoList/TodoList";
import Header from "../../components/Header/Header";
import "./Dashboard.css";

interface DashboardProps {
  title: string;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function Dashboard({ title, todos, setTodos }: DashboardProps) {
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

  const handleAddClick = () => {
    if (!todoText) return;
    const newTodo: Todo = { id: Date.now(), text: todoText, completed: false };
    setTodos([...todos, newTodo]);
  };
  const handleDeleteClick = () => {
    const newTodos: Todo[] = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleInputChange = (value: string) => {
    setTodoText(value);
  };

  const itemsToDelete = (): boolean => {
    for (let todo of todos) {
      if (todo.completed) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="main-container">
      <Header headerText={title} />
      <TodoList todos={todos} handleListToggle={handleToggle} />
      <Input placeholder="Enter Todo Item" onChange={handleInputChange} />
      <div className="button-container">
        <Button
          buttonText="Add"
          disabled={!todoText}
          handleClick={handleAddClick}
        />
        <Button
          buttonText="Delete"
          disabled={!itemsToDelete()}
          handleClick={handleDeleteClick}
          variant="warn"
        />
      </div>
    </div>
  );
}
export default Dashboard;
