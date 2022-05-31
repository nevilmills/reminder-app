import React, { useEffect, useState } from "react";
import { FilterOptions, TodoEntry } from "../utils/types";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";

interface ListProps {
  todos: TodoEntry[];
  deleteTodo: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  toggleComplete: (id: string) => void;
  setTodos: React.Dispatch<React.SetStateAction<TodoEntry[]>>;
}

export const List: React.FC<ListProps> = ({
  todos,
  setTodos,
  deleteTodo,
  toggleComplete,
}) => {
  const [showing, setShowing] = useState<FilterOptions>("all");
  const [activeCount, setActiveCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    let numActive = 0;
    let numCompleted = 0;

    todos.forEach((todo) => {
      if (!todo.completed) {
        numActive++;
      } else {
        numCompleted++;
      }
    });
    setActiveCount(numActive);
    setCompletedCount(numCompleted);
  }, [todos]);

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

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

      <div className="flex flex-col items-center mt-2">
        <h3 className="mb-4">Active reminders: {activeCount}</h3>
        <ol className="list-decimal">
          {todos.length
            ? todos
                .filter((todo) => {
                  if (showing === "incomplete") {
                    return todo.completed === false;
                  } else if (showing === "completed") {
                    return todo.completed === true;
                  } else {
                    return true;
                  }
                })
                .map((todo) => (
                  <li key={todo.id}>
                    <Todo
                      todo={todo}
                      toggleComplete={toggleComplete}
                      deleteTodo={deleteTodo}
                    />
                  </li>
                ))
            : null}
        </ol>
      </div>
      <div className="mt-4 flex space-x-2">
        {completedCount > 0 ? (
          <button className="btn-del text-sm" onClick={clearCompleted}>
            Clear all completed
          </button>
        ) : null}
        <AddTodo todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};
