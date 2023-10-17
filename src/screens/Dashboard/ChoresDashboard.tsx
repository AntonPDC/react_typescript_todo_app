import "./Dashboard.css";
import Dashboard from "./Dashboard";
import { useRecoilState } from "recoil";
import { todoChoresAtom } from "../../state/todos";

function ChoresDashboard() {
  const [todos, setTodos] = useRecoilState(todoChoresAtom);

  return <Dashboard title="Chores List" todos={todos} setTodos={setTodos} />;
}
export default ChoresDashboard;
