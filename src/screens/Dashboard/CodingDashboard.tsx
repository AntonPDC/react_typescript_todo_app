import "./Dashboard.css";
import Dashboard from "./Dashboard";
import { useRecoilState } from "recoil";
import { todoCodingAtom } from "../../state/todos";

function CodingDashboard() {
  const [todos, setTodos] = useRecoilState(todoCodingAtom);

  return <Dashboard title="Coding List" todos={todos} setTodos={setTodos} />;
}
export default CodingDashboard;
