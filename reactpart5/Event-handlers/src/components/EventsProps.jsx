import React from "react";

export function EventsProps() {
  const handleWellComeUser = (name) => {
    alert(`Hello ${name.toUpperCase()}`);
  };
  const handleHover = () => {
    console.log("Hovered for me");
  };

  return (
    <>
      <WellComeUser
        onClick={() => handleWellComeUser("Inam")}
        onMouseEnter={handleHover}
      />
    </>
  );
}

export function WellComeUser(props) {
    const {onClick, onMouseEnter} = props
    const handleClick = () => {
        alert("click me ")
        onClick()
    }
  return (<>
  <button onClick={onClick} >Click me first</button>
  <button onMouseEnter={onMouseEnter} >Click me second</button>
  <button onClick={handleClick}>Click me third</button>
  
  </>)
}
