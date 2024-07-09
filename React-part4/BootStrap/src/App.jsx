import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <ListTodo />
      </center>
    </>
  );
}

export default App;
