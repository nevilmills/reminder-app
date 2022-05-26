import React from "react";

interface ListProps {
  todos: string[];
}

export const List: React.FC<ListProps> = ({ todos }) => {
  return (
    <div>
      <ol className="list-decimal">
        {todos.length ? todos.map((todo) => <li>{todo}</li>) : null}
      </ol>
    </div>
  );
};
