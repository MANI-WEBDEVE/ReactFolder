"use client";

import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import {useState} from "react"

export function PlaceholdersAndVanishInputDemo() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);


  const handleInputChange = (e) => {
    let a = e.target.value;
    setInputValue(a);
    // console.log(a)

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!inputValue) return;
    
    if(task. includes(inputValue)) return;
   

    setTask((prevTask) => [...prevTask, inputValue])


  }

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  
  return (
    <>
    <div className=" flex w-full relative   justify-center  items-center px-4">
        <div className="absolute right-[-2500%] top-[44px]">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        value={inputValue}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        />
        </div>
       
    </div>
   
      </>
    
  );
}
