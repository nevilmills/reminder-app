import { title } from "process";
import React, { useState } from "react";
import { Todo } from "../utils/types";
import { v4 as uuidv4 } from "uuid";

interface AddTodoProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const AddTodo: React.FC<AddTodoProps> = ({ todos, setTodos }) => {
  const [text, setText] = useState("");
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    // Add to todo list if string isn't empty.
    if (text.length > 0) {
      setTodos([...todos, { id: uuidv4(), text, completed: false }]);
    }
    setShowForm((prevState) => !prevState);
    setText("");
  };

  if (showForm) {
    return (
      <div className="w-full">
        <form className="flex flex-col items-center space-y-2">
          <input
            type="text"
            placeholder="Don't forget to..."
            name="newTodo"
            value={text}
            onChange={(e) => setText(e.target.value)}
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
      <div className="flex w-full justify-center">
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
