import { useState } from "react";

import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let movie = "Infected"
  let movie2 = 'zombies'
  return (
    <>
      <Card movie = {movie}/>
      <Card movie = {movie2}/>
     
    </>
  );
}

export default App;
