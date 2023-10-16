import { useState } from "react";
import { Todo } from "../../components/TodoList/TodoList";
import "./Dashboard.css";
import Dashboard from "./Dashboard";

function ChoresDashboard() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Vacuum", completed: false },
    { id: 2, text: "Dust", completed: false },
  ]);

  return <Dashboard title="Chores List" todos={todos} setTodos={setTodos} />;
}
export default ChoresDashboard;
