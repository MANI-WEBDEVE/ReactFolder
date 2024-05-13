import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";

import { v4 as uuidv4 } from "uuid";

function App() {
  //-------------------------------------------------------------------------------------------------------------------------------------------
  //ya sirf khali todo ha
  const [Todo, setTodo] = useState("");
  //-------------------------------------------------------------------------------------------------------------------------------------------
  //ya Todos ka array ha
  const [Todos, setTodos] = useState([]);
  //-------------------------------------------------------------------------------------------------------------------------------------------

  // ya Add function ha jo todo ko add karna ka liya istamal hota ha
  const handleAdd = () => {
    setTodos([...Todos, { id: uuidv4(), Todo, isCompleted: false }]);
    setTodo("");
    console.log(Todos);
  };
  //-------------------------------------------------------------------------------------------------------------------------------------------
  //ya Change function ha jo kisi value ko target kar ta ha
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  //-------------------------------------------------------------------------------------------------------------------------------------------
  // ya handle Edit  function jo Todo ki value change kar na ka liya istamal ho ga
  const handleEdit = () => {};
  //-------------------------------------------------------------------------------------------------------------------------------------------
  // ya Delete function ha jo Todo ko delete karna ka liya istamal ho ga
  const handleDelete = (e) => {
    console.log(e.target.value)

  };
  //-------------------------------------------------------------------------------------------------------------------------------------------
  //ya input ka checkBox handle kar ta ha
  const handleCheckBox = (e) => {
    //-------------------------------------------------------------------------------------------------------------------------------------------
    // ya id ko target kar ta ha
    let id = e.target.name;
    console.log(id);
    //-------------------------------------------------------------------------------------------------------------------------------------------
    // ya index find karta ha or ya function lata ha
    let index = Todos.findIndex((item) => {
      //phir return karta ha

      return item.id === id;
    });
    //-------------------------------------------------------------------------------------------------------------------------------------------
    // ya jo [...Todos] ya new object ya Array bana ta ha
    let newTodos = [...Todos];
    //-------------------------------------------------------------------------------------------------------------------------------------------
    // is ma bate ki ja rahie ha ka ager todo complete ho to ya warna ya
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    //-------------------------------------------------------------------------------------------------------------------------------------------
    setTodos(newTodos);
  };
  //-------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto bg-violet-300 rounded-xl my-5 p-5 min-h-[70vh] ">
        <div className="addTodo my-5 ">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={Todo}
            type="text"
            className="w-72 border border-violet-800 rounded-md p-1  "
            placeholder="Add Your Todo"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-700 hover:bg-violet-300 text-white p-2 py-1 px-4 rounded-lg font-bold mx-6 hover:text-black"
          >
            Add
          </button>
        </div>
        <h2 className="text-xl font-bold">Your Todo</h2>
        <div className="todos">
          {Todos.map((item) => {
            return (
              <div
                key={item.id}
                className="todo flex w-1/2 my-3 justify-between"
              >
                <input
                  name={item.id}
                  onChange={handleCheckBox}
                  type="checkbox"
                  value={item.isCompleted}
                  id=""
                />
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.Todo}
                </div>
                <button
                  onClick={handleEdit}
                  className="bg-violet-700 hover:bg-violet-300 text-white p-2 py-1 px-4 rounded-lg font-bold mx-1 hover:text-black"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-violet-700 hover:bg-violet-300 text-white p-2 py-1 px-4 rounded-lg font-bold mx-1 hover:text-black"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
