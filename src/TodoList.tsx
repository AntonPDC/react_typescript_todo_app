import React, { useState } from "react";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: "Learn typescript you dummy", completed: false },
    { id: 2, text: "You need to change diaper", completed: false },
    { id: 3, text: "Build a Todo app", completed: false },
  ]);

  const [input, setInput] = useState<string>("");

  const handleToggle = (id: number) => {
    const newTodos: item[] = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // const handleToggle1 = (id: number) => {
  //   const newTodos: item[] = []
  //   for(let i = 0; i < todos.length; i++){
  //     const todo: item = todos[i];
  //     if(todo.id === id){
  //       return { ...todo, completed: !todo.completed}
  //     }
  //     return todo;
  //     }
  //   }
  const handleClick = () => {
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
  };
  return (
    <div className="main-container">
      <h1>TodoList</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter Todo Item"
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};
