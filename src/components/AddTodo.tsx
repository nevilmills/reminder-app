import { title } from "process";
import React, { useState } from "react";

interface AddTodoProps {
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AddTodo: React.FC<AddTodoProps> = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    // Add to todo list if string isn't empty.
    if (newTodo.length > 0) {
      setTodos([...todos, newTodo]);
    }
    setShowForm((prevState) => !prevState);
    setNewTodo("");
  };

  if (showForm) {
    return (
      <div className="w-full mt-4">
        <form className="flex flex-col items-center space-y-2">
          <input
            type="text"
            placeholder="Don't forget to..."
            name="newTodo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <div>
            <button type="submit" className="btn" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="flex w-full justify-center mt-4">
        <button
          className="btn"
          onClick={() => setShowForm((prevState) => !prevState)}
        >
          + Add Todo
        </button>
      </div>
    );
  }
};
