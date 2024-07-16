import React from "react";

function App() {
  const handleButttonClick = (e) => {
    //* console.log(e)
    //* let name = prompt('Enter your name')
    //* alert(name)
    //* Asynchronus event handle
    //* e.persist();
    //* setTimeout(() => {
    //*   if (e.target.textContent === "Click Me" ) {
    //*     console.log('hello')
    //*     alert("Button Clicked");
    //*     e.target.textContent = "Button Clicked";
    //*   } else {
    //*     alert("Button Already Clicked");
    //*   }
    //* }, 5000);
    console.log(e.target.value);
  };
  const handleButttonClick2 = (event) => {
    alert("Button Clicked");
    console.log(event)
  };

  const handleInputSubmit = (e) => {
    console.log(e.target.value);
  };

  const handleNameFunction = (name, age) => {
    console.log(`Hello ${name}, you are ${age} years old`);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInputSubmit}
        onClick={handleButttonClick}
      />
      {/* //* Function Components with Nameing function and this method no need call
      the function; */}
      <button onClick={handleButttonClick}>Click Me</button>
       {/* //* in React, event handler recevie the event object on an argument but do
       //* call the function this method you pass hard coded event object like this
      //* example */}
      <button onClick={(event) => handleButttonClick2(event)}>
        Click Me 2
      </button>
      <br />
       {/* // * Inline function and function component with inline arrow function */}
      <button onClick={() => alert("hello guys")}>Click Me</button>
      <br />
      {/* //* Passing Arguments to event handler */}
      <button onClick={() => handleNameFunction("Muhammad", 18)}>
        Click Me
      </button>
    </div>
  );
}

export default App;
