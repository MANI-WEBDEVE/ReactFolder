import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [btnshow, setBtnshow] = useState(true);
  const [todos, setTodos] = useState([
    {
      title: "Tools Todo",
      desc: "happy tools",
    },
    {
      title: "grocery todo",
      desc: "happy and healthy grocery",
    },
    {
      title: " madicine Todo",
      desc: "happy helath good madicicen",
    },
  ]);

  let Todo = ({todo}) => {
    return (
      <>
      <div>{todo.title}</div>
      <div>{todo.desc}</div>
      </>
    )
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* {todos.map((todo) => {
          return (
            <div key={todo.title}>
              <div className="todo">{todo.title}</div>
              <div className="todo">{todo.desc}</div>
            </div>
          );
        })} */}
        {todos.map(item => {
          return <Todo key={item.title} todo={item} />
        })}
        {btnshow ? <button>show true</button> : <button>show false</button>}
        <button onClick={() => setCount(setBtnshow(!btnshow))}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
// git problem

export default App;
