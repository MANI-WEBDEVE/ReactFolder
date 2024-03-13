import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "../src/components/Navbar";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [cards, setCard] = useState([]);
  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setCard(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="cardContainer ">
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              className="card border border-gray-500 m-5 p-3 rounded-lg "
            >
              <h1 className="text-3xl ">{card.title}</h1>
              <p>{card.body}</p>

              <span>By: userId: {card.userId}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
