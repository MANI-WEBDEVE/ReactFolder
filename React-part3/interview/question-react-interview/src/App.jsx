import { useState } from 'react'
import './App.css'

function App() {
  
  const [mulValue, setmulValue] = useState(1)

   let multiplyValueByFive = mulValue * 5  

  const multiplyValue = () => {
    setmulValue(mulValue + 1)

  }

  return (
    <>
    <div>
      <h2>Main Value: {mulValue}</h2>
      <div>
        <button onClick={multiplyValue} >Multiply by Five</button>
      </div>
      <h4>Multiply Value: {multiplyValueByFive}</h4>
    </div>
    </>
  )
}

export default App
