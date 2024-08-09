import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import TodoAllDle from "./TodoAllDle";
// import TodoList from "./TodoList";


const Todo = () => {
  const [task, setTask] = useState(()=> {
    let dataTask = localStorage.getItem("task-data");
    if (dataTask) {
      return JSON.parse(dataTask);
    }
    return []
  });
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

  localStorage.setItem("task-data", JSON.stringify(task));

  return (
    <>
      <TodoForm onAddTodoItems={handleSubmit} />
      <TodoDate onStateTime={time} onStateSetTime={setTime} />
      <section className="w-[100vw] flex items-center justify-center gap-3">
        <ul className="w-[30%] px-3 py-2 mt-2">
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
