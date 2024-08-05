import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
// import TodoList from "./TodoList";

const Todo = () => {
  const [task, setTask] = useState([]);
  const [time, setTime] = useState("");


  const handleDeleteTodo = (value) => {
    console.log(value);
    setTask(task.filter((curElm) => curElm !== value));
  };

  const handleSubmit = (inputValue) => {
    // const {id, content, checked} = inputValue
    if (!inputValue.content) return;

    // if (task.includes(inputValue)) return;

    const ifContentAlreadyExit = task.find((curElm) => curElm.content === inputValue.content);
    if (ifContentAlreadyExit) return;



    setTask([...task, inputValue]);
  };

  return (
    <>
      <TodoForm onAddTodoItems={handleSubmit} />
    <TodoDate onStateTime={time} onStateSetTime={setTime}/>
      <section className="w-[100vw] flex items-center justify-center gap-3">
        <ul className="w-[30%] px-3 py-2 mt-2">
          {task.map((curElm, Index) => {
            return (
              <TodoList
                key={Index}
                data={curElm.content}
                onHandleDelete={handleDeleteTodo}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Todo;
