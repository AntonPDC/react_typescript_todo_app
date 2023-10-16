import { useState } from "react";
import { Todo } from "../../components/TodoList/TodoList";
import "./Dashboard.css";
import Dashboard from "./Dashboard";

function CodingDashboard() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn typescript you dummy", completed: false },
    { id: 2, text: "You need to work on Front-End stuff", completed: false },
  ]);
  return <Dashboard title="Coding List" todos={todos} setTodos={setTodos} />;
}
export default CodingDashboard;
