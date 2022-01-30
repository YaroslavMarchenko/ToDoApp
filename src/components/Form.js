import React from "react";

function Form({ setInputText, inputText, toDos, setToDos, setStatus }) {
  const inputNewText = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitText = (e) => {
    e.preventDefault();
    setToDos([
      ...toDos,
      { text: inputText, completed: false, id: Math.random() * 100 },
    ]);
    setInputText("");
  };

  const statusToDo = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputNewText}
        type="text"
        className="todo-input"
      />
      <button onClick={submitText} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusToDo} name="todos" className="filter-todo">
          <option value="all"> ALL </option>
          <option value="completed"> COMPLETED </option>
          <option value="uncompleted"> UNCOMPLETED </option>
        </select>
      </div>
    </form>
  );
}

export default Form;
