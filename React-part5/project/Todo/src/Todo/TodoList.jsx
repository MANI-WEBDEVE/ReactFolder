const TodoList = ({ key1, data,onHandleDelete }) => {

    const handleDelete = () => {
        onHandleDelete(data)
    }


  return (
    <>
      <div className="  font-bold flex border border-black justify-center items-center  gap-3 px-3 py-2 rounded-lg mt-2">
        <li className="text-2xl" key={key1}>{data}

        </li>
       
          <button className="border-[1px] border-black bg-blue-600 font-semibold hover:bg-blue-400 duration-500 p-2 rounded-xl transition-all">Check</button>
          <button onClick={() => handleDelete()} className="border-[1px] border-black bg-red-600 font-semibold hover:bg-red-400 duration-500  p-2 rounded-xl transition-all">Delete</button>
      </div>
    </>
  );
};

export default TodoList;
