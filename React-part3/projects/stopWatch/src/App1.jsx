import { useState, useRef } from 'react'
import './App.css'

function App() {

  const [Start, setStart] = useState(null)
  const [now, setNow] = useState(null)
  let intervalRef = useRef(null)
  

  const handleWatch = () => {

    setStart(Date.now())
    setNow(Date.now())
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10)

  }

  const handleStop = () => {
    clearInterval(intervalRef.current)
  }
 
  let secondsPassed = 0;
  if (Start != null && now != null) {
    secondsPassed= (now - Start) / 1000
  }

  console.log(secondsPassed.toFixed(2))


  // Ek counter ko start karte hain jo 1 second ke intervals mein increment hota hai
let counter = 0;
const intervalID = setInterval(() => {
  counter++;
  console.log("Counter:", counter);
}, 1000);

// 5 seconds ke baad timer ko rokna hai
setTimeout(() => {
  clearInterval(intervalID); // clearInterval() ko intervalID ke sath use karke timer ko rok dete hain
  console.log("Timer stopped after 5 seconds");
}, 5000);





  return (
    <>
    <div>
      <div>
        <h2>Stop watch: {secondsPassed.toFixed(2)}</h2>
      </div>
      <button onClick={handleWatch}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
    </>
  )
}

export default App
