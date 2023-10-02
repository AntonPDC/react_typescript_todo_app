import "./TodoItemList.css";

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemListProps {
  todos: TodoItem[];
  handleListToggle: (id: number) => void;
}

const TodoItemList: React.FC<TodoItemListProps> = ({
  todos,
  handleListToggle,
}) => {
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
};

export default TodoItemList;
