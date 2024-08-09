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
      <div className="  font-bold flex border border-black justify-center items-center  gap-3 px-3 py-2 rounded-lg mt-2 hover:translate-y-2  hover:scale-95 transition-all hover:duration-500 overflow-auto hover:bg-slate-800/20">
        <li className={ checked ? "isCompelet" : "unCompelet"} key={key1}>{data}

        </li>
       
          <button onClick={handleChecked} className="border-[1px] border-black bg-blue-600 font-semibold hover:bg-blue-400 duration-500 p-2 rounded-xl transition-all">Check</button>
          <button onClick={() => handleDelete(data)} className="border-[1px] border-black bg-red-600 font-semibold hover:bg-red-400 duration-500  p-2 rounded-xl transition-all ">Delete</button>
      </div>
    </>
  );
};

export default TodoList;
