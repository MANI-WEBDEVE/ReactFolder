import React from "react";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "../index.css";
export function GridBackgroundDemo() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [time, setTime] = useState("");

  const randomVal = Math.floor(Math.random() * 5);

  const handleInputChange = (e) => {
    let a = e.target.value;
    setInputValue(a);
    // console.log(a)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) return;

    if (task.includes(inputValue)) return;

    setTask((prevTask) => [...prevTask, inputValue]);
  };

  const placeholders = [
    "Write a Groccery Items 🥗",
    "Write a Todo Items 😎",
    "Rem to bring medicine 💊",
    "Rem to bring every thing 💭 ",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      let formatedDate = date.toLocaleDateString();
      let formatedTime = date.toLocaleTimeString();
      setTime(formatedTime + " " + formatedDate);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const handleAllDelete = () => {
    setTask([]);
  };

  return (
    <>
      <div className="h-[120vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          {" "}
        </div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"></p>
        <h1 className="text-5xl font-bold text-center text-white  ">
          Todo List
        </h1>
        <h1 className="text-2xl mt-2 font-medium text-center text-white  ">
          {time}
        </h1>
        <section className="">
          <div className="absolute">
            <div className=" flex    justify-center  items-center px-4">
              <div className=" ml-[32rem] mt-4 ">
                <PlaceholdersAndVanishInput
                  placeholders={placeholders}
                  value={inputValue}
                  onChange={handleInputChange}
                  onSubmit={handleSubmit}
                  className="p-3"
                />
              </div>
            </div>
          </div>
        </section>
        <section className=" absolute top-[35%] right-[40%] text-white font-medium ">
          <div className="flex justify-center items-center ">
            <div className="flex flex-col gap-2 justify-center items-center">
              <ul className="flex justify-center items-center gap-4 flex-col">
                {task.map((curElm, index) => (
                  <div
                    key={index}
                    className="border border-white px-16 py-3 rounded-full justify-around items-center flex gap-6 hover:bg-gray-900 hover:border hover:border-gray-800 hover:opacity-55 duration-500"
                  >
                    <li>{curElm}</li>
                    <span>
                      <button className="text-green-700 hover:bg-green-700 duration-500 transition-all hover:text-white p-2 rounded-full border border-white">
                        <FaCheck />
                      </button>
                    </span>
                    <span>
                      <button
                        onClick={() => {
                          setTask(task.filter((elm) => elm !== curElm));
                        }}
                        className="bg-red-700 p-2 rounded-full border border-white hover:text-red-700 duration-500 transition-all hover:bg-gray-500"
                      >
                        <MdDelete />
                      </button>
                    </span>
                  </div>
                ))}
              </ul>

              <div
                onClick={handleAllDelete}
                className="bg-slate-600/30 p-2 w-[100-vw] ml-4 rounded-lg flex items-center justify-center"
              >
                <button className="w-full ">Clear All</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// export function GridBackgroundDemo() {
//   return (
//     <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
//       {/* Radial gradient for the container to give a faded look */}
//       <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
//       <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
//         Backgrounds
//       </p>
//     </div>
//   );
// }
