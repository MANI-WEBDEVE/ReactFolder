import "../index.css"

const TodoList = ({ key1,data1, data,onHandleDelete, checked, onHandleChecked }) => {

    const handleDelete = () => {
        onHandleDelete(data)
    }

    const handleChecked = () => {
        onHandleChecked(data1)
    }


  return (
    <>
      <div className="  font-bold flex border border-black justify-around items-center  gap- px-3 py-2 rounded-lg mt-2 hover:translate-y-2  hover:scale-95 transition-all hover:duration-500 overflow-auto hover:bg-slate-800/20 overflow-x-hidden " >
        <li className={ checked ? "isCompelet" : "unCompelet"} key={key1}>{data}

        </li>
       <div className="flex items-center justify-center gap-2">
          <button onClick={handleChecked} className=" bg-blue-600  hover:bg-blue-400 duration-500 p-2 rounded-lg  transition-all">Check</button>
          <button onClick={() => handleDelete(data)} className=" bg-red-600  hover:bg-red-400 duration-500  p-2 rounded-lg transition-all ">Delete</button>
       </div>
      </div>
    </>
  );
};

export default TodoList;
