import "./Dashboard.css";
import Dashboard from "./Dashboard";
import { useRecoilState } from "recoil";
import { todoBabyAtom } from "../../state/todos";

function BabyDashboard() {
  const [todos, setTodos] = useRecoilState(todoBabyAtom);

  return <Dashboard title="Baby List" todos={todos} setTodos={setTodos} />;
}
export default BabyDashboard;
