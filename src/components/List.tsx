import React, { useState } from "react";
import { FilterOptions, Todo } from "../utils/types";

interface ListProps {
  todos: Todo[];
  deleteTodo: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  toggleComplete: (id: string) => void;
}

export const List: React.FC<ListProps> = ({
  todos,
  deleteTodo,
  toggleComplete,
}) => {
  const [showing, setShowing] = useState<FilterOptions>("all");

  if (showing === "all") {
    return (
      <div>
        <div className="space-x-2">
          <button className="btn" onClick={() => setShowing("all")}>
            All
          </button>
          <button className="btn" onClick={() => setShowing("incomplete")}>
            Incomplete
          </button>
          <button className="btn" onClick={() => setShowing("completed")}>
            Completed
          </button>
        </div>

        <ol className="list-decimal">
          {todos.length
            ? todos.map((todo) => (
                <li key={todo.id}>
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
                </li>
              ))
            : null}
        </ol>
      </div>
    );
  } else if (showing === "incomplete") {
    return (
      <div>
        <div className="space-x-2">
          <button className="btn" onClick={() => setShowing("all")}>
            All
          </button>
          <button className="btn" onClick={() => setShowing("incomplete")}>
            Incomplete
          </button>
          <button className="btn" onClick={() => setShowing("completed")}>
            Completed
          </button>
        </div>

        <ol className="list-decimal">
          {todos.length
            ? todos
                .filter((todo) => todo.completed === false)
                .map((todo) => (
                  <li key={todo.id}>
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
                  </li>
                ))
            : null}
        </ol>
      </div>
    );
  } else {
    return (
      <div>
        <div className="space-x-2">
          <button className="btn" onClick={() => setShowing("all")}>
            All
          </button>
          <button className="btn" onClick={() => setShowing("incomplete")}>
            Incomplete
          </button>
          <button className="btn" onClick={() => setShowing("completed")}>
            Completed
          </button>
        </div>

        <ol className="list-decimal">
          {todos.length
            ? todos
                .filter((todo) => todo.completed === true)
                .map((todo) => (
                  <li key={todo.id}>
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
                  </li>
                ))
            : null}
        </ol>
      </div>
    );
  }
};
