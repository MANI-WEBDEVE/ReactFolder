
import './App.css'
import { useAppDispatch, useAppSelector } from './store/hook'
import { decrement, increamenrt } from './store/slices/counter'

function App() {
  
  const count = useAppSelector((s) => s.counter)
  const useDispatch = useAppDispatch()  

  return (
    <>
    <h1>Count {count}</h1>
    <button onClick={() => useDispatch(increamenrt())}>+++</button>
    <button onClick={() => useDispatch((decrement()))}>----</button>
    </>
  )
}

export default App
