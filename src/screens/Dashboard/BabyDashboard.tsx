import { useState } from "react";
import { Todo } from "../../components/TodoList/TodoList";
import "./Dashboard.css";
import Dashboard from "./Dashboard";

function BabyDashboard() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Bath Time", completed: false },
    { id: 2, text: "You need to change diaper", completed: false },
  ]);

  return <Dashboard title="Baby List" todos={todos} setTodos={setTodos} />;
}
export default BabyDashboard;
