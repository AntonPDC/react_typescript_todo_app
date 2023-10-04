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
function TodoList({ todos, handleListToggle }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => handleListToggle(todo.id)}
          className={todo.completed ? "completed" : undefined}
        >
          {`${todo.text}`}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
