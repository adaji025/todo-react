import React from "react";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id} className="todo-list">
          <input
            value={todo.title}
            onChange={(e) => e.preventDefault()}
            type="text"
          />
        </li>
      ))}
    </div>
  );
};

export default TodoList;
