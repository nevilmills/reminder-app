import React, { useState } from "react";
import { Todo } from "../utils/types";
import { AddTodo } from "./AddTodo";
import { List } from "./List";

interface TodoCardProps {}

export const TodoCard: React.FC<TodoCardProps> = ({}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const deleteTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newTodos = todos.filter((todo) => todo.text != e.currentTarget.value);
    setTodos(newTodos);
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="w-[1000px] h-[750px] bg-sky-200 border-2 border-gray-400 rounded-xl shadow-lg flex flex-col items-center">
      <div className="w-96 text-center text-xl mt-4 border-b-[1px] border-gray-500">
        <h1>To-do List</h1>
      </div>
      <div className="mt-4">
        <List
          todos={todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      </div>
      <div className="mt-4">
        <AddTodo todos={todos} setTodos={setTodos} />
      </div>
      <button
        onClick={() =>
          todos.forEach((todo) =>
            console.log(`id: ${todo.id}, text: ${todo.text}`)
          )
        }
      >
        Click me
      </button>
    </div>
  );
};
