import React from "react";

function ToDo({ text, todo, toDos, setToDos }) {
  const deleteToDo = () => {
    setToDos(toDos.filter((el) => el.id !== todo.id));
  };

  const completeToDo = () => {
    setToDos(
      toDos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="toDo">
      <li className={`toDo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeToDo} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteToDo} className="delete-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default ToDo;
