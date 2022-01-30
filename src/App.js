import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  //State
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("ALL");
  const [filteredToDos, setFilteredToDos] = useState([]);

  useEffect(() => {
    getLocal();
  }, []);

  //UseEffect
  useEffect(() => {
    filterToDo();
    saveToLocal();
  }, [toDos, status]);

  //Functions
  const filterToDo = () => {
    switch (status) {
      case "completed":
        setFilteredToDos(toDos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredToDos(toDos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredToDos(toDos);
        break;
    }
  };

  //Save to local
  const saveToLocal = () => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  };
  const getLocal = () => {
    if (localStorage.getItem("toDos") === null) {
      localStorage.setItem("toDos", JSON.stringify([]));
    } else {
      let localToDo = JSON.parse(localStorage.getItem("toDos"));
      setToDos(localToDo);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form
        toDos={toDos}
        setToDos={setToDos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        setToDos={setToDos}
        toDos={toDos}
        filteredToDos={filteredToDos}
      />
    </div>
  );
}

export default App;
