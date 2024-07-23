import { useState } from "react";

function UseStateChallange() {
  const [user, setuser] = useState([
    { name: "MuhammadInam", age: 18 },
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 35 },
  ]);

  return (
    <>
      <section>
        <ul>
          {user.map((items, index) => {
            return (
              <li key={index}>
                <p>{items.name} - {items.age} year old</p>
                <h2></h2>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default UseStateChallange;
