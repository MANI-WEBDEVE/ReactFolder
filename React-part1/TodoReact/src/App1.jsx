import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import React from "react";

const App1 = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showTodos, setShowTodos] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem('todos')
    if(todoString){
      let todo = JSON.parse(localStorage.getItem('todos'))
      setTodos(todo)
    }
  }, [])
  
  const toggleFinished = () => {
     setShowTodos(!showTodos)
  }
  



  const useToLS = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
 

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter(item=> item.id === id)
    setTodo(t[0].todo)

    let toodod = todos.filter(item => item.id !== id)
    setTodos(toodod)
    useToLS()
  };

  const handleDelete = (e, id) => {
    useToLS()
    let newTodo = todos.filter(item=> {
      return item.id !== id
    })
    setTodos(newTodo)

  };

  const handleAdd = () => {
  
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
      setTodo("");
      useToLS()

    // console.log(setTodos);
  };

  const handleCheckBox = (e) => {
    let id = e.target.name;
    // console.log(id);
    let index = todos.findIndex((item) => {
      return item.id == id;
    });
    let newTodo = [...todos];
    newTodo[index].isCompleted = !newTodo[index].isCompleted;
    setTodos(newTodo);
    useToLS()

    // console.log(newTodo, todos);
  };

  return (
    <>
      <div className="w-full min-h-screen bg-violet-400">
        <div className="w-full h-11 bg-violet-700">
          <div className="flex items-center py-2">
            <h2 className="font-bold text-black">Todo App</h2>
          </div>
          <div className="flex justify-center items-center mt-4 gap-3">
            <input
              onChange={handleChange}
              value={todo}
              className="py-2 px-6 rounded-lg outline-none"
              type="text"
              placeholder="Add Task"
            />
            <button
              onClick={handleAdd}
              disabled={todo.length <= 3}
              className="py-2 px-4 bg-violet-600 rounded-lg hover:bg-violet-900 disabled:bg-violet-400 font-bold "
            >
              Add
            </button>
          </div>
          <div className="flex justify-center items-center mt-4 ">
          <input type="checkbox" onChange={toggleFinished}  checked={showTodos}/> show Finished Todo
          </div>
          <div className="flex justify-center items-center mt-4 gap-3 flex-col">
            {todos.length === 0 && <div className="text-2xl font-semibold text-black">No Todo Yets</div>}
            {todos.map((item) => {
              return ( (showTodos || !item.isCompleted) && 
                <div
                  key={item.id}
                  className="card flex  gap-3 justify-between items-center "
                >
                  <input
                    name={item.id}
                    onChange={handleCheckBox}
                    type="checkbox"
                    checked={item.isCompleted}
                  />
                  <div className="flex items-start justify-start">
                    <p className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </p>
                  </div>
                  <div className="flex gap-3 justify-center items-center">
                    <button
                      onClick={(e) => {handleEdit(e, item.id)}}
                      className="py-2 px-4 bg-violet-600 rounded-lg hover:bg-violet-900 font-bold "
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {handleDelete(e, item.id)}}
                      className="py-2 px-4 bg-violet-600 rounded-lg hover:bg-violet-900 font-bold "
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App1;
