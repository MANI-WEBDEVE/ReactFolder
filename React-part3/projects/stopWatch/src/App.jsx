import { useState, useRef } from 'react'
import './App.css'
// import React, { useRef } from 'react';

function App() {
  const inputRef = useRef(null);
  const btnRef = useRef(null)

  function focusInput() {
    // This will focus the input element
    inputRef.current.focus();
    console.log(inputRef.current.innerHTML = "inma")
    console.log()
    btnRef.current.innerHTML = `<p> i am inam</p>`
    btnRef.current.style.backgroundColor ="red"
  }

  return (
    <div>
      <input type="text"  ref={inputRef} />
      <button ref={btnRef} onClick={focusInput}>Focus the input</button>
    </div>
  );
}
export default App