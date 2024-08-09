import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import TodoAllDle from "./TodoAllDle";
import { setTodoDataLocalStorage, TodoDataGetLocalStorage } from "./TodoLocalStorage";
// import TodoList from "./TodoList";


const Todo = () => {
  const [task, setTask] = useState(() => TodoDataGetLocalStorage());
  const [time, setTime] = useState("");

  const handleDeleteTodo = (value) => {
    setTask(task.filter((curElm) => curElm.content !== value));
  };

  const handleSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) return;

    // if (task.includes(inputValue)) return;

    const ifContentAlreadyExit = task.find(
      (curElm) => curElm.content === inputValue.content
    );
    if (ifContentAlreadyExit) return;

    setTask((preTask) => [...preTask, { id, content, checked }]);
  };

  const handleAllDelete = () => {
    setTask([]);
  };

  const handleChecked = (valCheck) => {
    console.log(valCheck)
    const checkVal = task.map((curElm) => {
      if (curElm.content === valCheck.content) {
        return { ...curElm, checked: !curElm.checked };
      } else {
        return curElm;
      }
    });
    setTask(checkVal)
  };

  setTodoDataLocalStorage(task)
  
  return (
    <>
      <TodoForm onAddTodoItems={handleSubmit} />
      <TodoDate onStateTime={time} onStateSetTime={setTime} />
      <section className="w-[100vw] mt-2 flex items-center justify-around gap-3">
        <ul className="md:w-[50%] md:px-14 lg:px-33 sm:px-22  py-3 mt-2 min-[400px]:px-13 max-[780px]:px-1 min-[400px]:w-[100%] max-[780px]:w-[100%]">
          {task.map((curElm) => {
            return (
              <TodoList
                key={curElm.id}
                data={curElm.content}
                data1={curElm}
                onHandleDelete={handleDeleteTodo}
                checked={curElm.checked}
                onHandleChecked={handleChecked}
              />
            );
          })}
        </ul>
      </section>
      <TodoAllDle onDeleteAll={handleAllDelete} />
    </>
  );
};

export default Todo;
