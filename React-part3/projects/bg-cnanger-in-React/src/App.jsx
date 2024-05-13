import { useState } from "react"

function App() {

  const [color, setColor] = useState('olive')

  

  return (
    <>
  <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
    <div className="flex flex-wrap justify-center bottom-10 inset-x-0 fixed">
    <div className="flex flex-wrap justify-center gap-4 px-3 py-2 rounded-2xl bg-white shadow-xl">
      <button onClick={() => setColor('#27272A')} className="bg-zinc-800 rounded-lg px-3 py-2 ">Zinc</button>
      <button onClick={() => setColor('black')} className="bg-black rounded-lg px-3 py-2 text-white ">black</button>
      <button onClick={() => setColor('#DC2626')} className="bg-red-500 rounded-lg px-3 py-2 ">red</button>
      <button onClick={() => setColor('#F59E0B')} className="bg-yellow-500 rounded-lg px-3 py-2 ">yellow</button>
      <button onClick={() => setColor('#EA580C')} className="bg-orange-500 rounded-lg px-3 py-2 ">orange</button>
      <button onClick={() => setColor('#374151')} className="bg-gray-800 rounded-lg px-3 py-2 ">Gray</button>
      <button onClick={() => setColor('#808000')} className="bg-yellow-700 rounded-lg px-3 py-2 ">Olive</button>
      <button onClick={() => setColor('#0369A1')} className="bg-blue-800 rounded-lg px-3 py-2 ">Blue</button>
      
    </div>
    </div>
  </div>
    </>
  )
}

export default App
