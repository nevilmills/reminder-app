import React from "react";
import { TodoEntry as _Todo } from "../utils/types";

interface TodoProps {
  todo: _Todo;
  toggleComplete: (id: string) => void;
  deleteTodo: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Todo: React.FC<TodoProps> = ({
  todo,
  toggleComplete,
  deleteTodo,
}) => {
  return (
    <div className="w-[200px] flex justify-between">
      <span
        className={todo.completed ? "line-through" : ""}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button
        className="ml-2 btn-del"
        type="button"
        value={todo.text}
        onClick={deleteTodo}
      >
        X
      </button>
    </div>
  );
};
