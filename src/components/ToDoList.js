import React from "react";
import ToDo from "./ToDo";

function ToDoList({ toDos, setToDos, filteredToDos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredToDos.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            toDos={toDos}
            setToDos={setToDos}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
