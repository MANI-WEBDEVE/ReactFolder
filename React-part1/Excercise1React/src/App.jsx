import { useState, useEffect } from "react";
import Navbar from "../src/components/Navbar";
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
      <div className="w-full min-h-screen">

      <div className="cardContainer min-h-screen ">
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              className="card h-[120px] border border-gray-500 m-5 p-3 rounded-lg "
            >
              <h1 className="text-3xl ">{card.title}</h1>
              <p>{card.body}</p>

              <span>By: userId: {card.userId}</span>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
}

export default App;
