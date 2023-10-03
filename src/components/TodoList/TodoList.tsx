import "./TodoList.css";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  handleListToggle: (id: number) => void;
}
function TodoItems({ todos, handleListToggle }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => handleListToggle(todo.id)}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {`${todo.text}`}
        </li>
      ))}
    </ul>
  );
}

export default TodoItems;
