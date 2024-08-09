import { useState } from "react";

const TodoForm = ({onAddTodoItems}) => {
  const [inputValue, setInputValue] = useState({});

 

  const handleInputChange = (value) => {
    setInputValue(
        {
            id:value.target.value,
            content:value.target.value,
            checked:false
        }
    );

  };

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddTodoItems(inputValue)
    setInputValue({
      id:'',
      content:'',
      checked:false
  })
  };





  return <>
  <form onSubmit={handleSubmit} className="w-full p-3 flex justify-center items-center gap-2">
    <input className="text-black border-none bg-slate-500/30 rounded-xl px-4 py-2" type="text" value={inputValue.content} onChange={handleInputChange} />
        <div>
            <button className="bg-green-600 font-semibold rounded-xl px-4 py-2 hover:bg-green-400 duration-500 transition-all border-[1px] border-slate-600 " >ADD</button>
        </div>
  </form>
  </>;
};

export default TodoForm;
