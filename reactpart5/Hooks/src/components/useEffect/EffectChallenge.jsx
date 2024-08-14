import React, { useEffect, useState } from 'react'

const EffectChallenge = () => {
    const [count, setCount] = useState(0)
    const [inputVal, setInputVal] = useState("")


    useEffect(( ) => {
        document.title = `Count: ${count}`        
    }, [ count])

    useEffect(( ) => {
        document.title = `Name: ${inputVal}`
        console.log(`${inputVal}`)
    }, [ inputVal])



  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>
        <input type="text" placeholder='Enter your name' value={inputVal}
        onChange={(e) => setInputVal(e.target.value) }

        />
        <p>{inputVal}</p>
      </div>
    </div>
  )
}

export default EffectChallenge
