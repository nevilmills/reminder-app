import React, { useState } from "react";
import { AddTodo } from "./AddTodo";
import { List } from "./List";

interface TodoCardProps {}

export const TodoCard: React.FC<TodoCardProps> = ({}) => {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <div className="w-[1000px] h-[750px] bg-sky-200 border-2 border-gray-400 rounded-xl shadow-lg flex flex-col items-center">
      <div className="w-96 text-center text-xl mt-4 border-b-[1px] border-gray-500">
        <h1>To-do List</h1>
      </div>
      <List todos={todos} />
      <AddTodo todos={todos} setTodos={setTodos} />
    </div>
  );
};
