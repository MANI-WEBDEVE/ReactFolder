
const TodoAllDle = ({onDeleteAll}) => {

    const handleAllDelete = () => {
        onDeleteAll()
    }
  return (
    <div className="flex justify-center items-center">
      <button onClick={handleAllDelete} className="bg-red-800 text-white font-semibold p-2 hover:bg-red-700 duration-500 transition-all rounded-full border-[1px] border-black hover:duration-700 hover:scale-100  hover:transition-all shadow-black shadow-2xl ">Clear All</button>
    </div>
  )
}

export default TodoAllDle
