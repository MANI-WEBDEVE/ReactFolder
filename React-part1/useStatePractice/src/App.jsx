import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [car, setCar] = useState({
    name: "paganie",
    modle: "2024",
    color: "syen",
    from: "japan",
  });
  const colorChanger = () => {
    setCar((previous) => {
      return { ...previous, color: "white" };
    });
  };
  return (
    <>
      <div className="carInfo">
        <h1> car name is {car.name} </h1>
        <p>
          my car color is {car.color} and model is {car.modle} from is{car.from}
        </p>
        <button onClick={colorChanger}>change Color</button>
      </div>
    </>
  );
}

export default App;
