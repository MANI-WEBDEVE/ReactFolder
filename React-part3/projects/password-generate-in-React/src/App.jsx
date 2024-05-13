import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [randomChar, setRandomChar] = useState(false)
  const [password, setPassword] = useState("")

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "1234567890";
    if(randomChar) str += "!@#$%^&*(){}<>??|~`";

    for(let i = 0; i < length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, randomChar, setPassword])

  useEffect(() => {
    generatePassword()
  
  }, [length, numberAllowed, randomChar, generatePassword])
  
  let passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)}, [password])

  return (
    <>
     <div className='w-full min-h-screen bg-zinc-800 text-white '>
      <div className='flex justify-center flex-col items-center'>
      <h2 className='text-3xl text-center font-semibold text-white mt-8'>Password Generator</h2>
      <div className='flex justify-center items-center gap-4'>
      <input className='px-4 py-2 mt-3 rounded-xl outline-none text-black' type="text" value={password} placeholder='password' readOnly  ref={passwordRef}/>
      <button className='bg-stone-600 py-2 px-4 rounded-xl mt-[10px] text-white font-semibold' onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className='flex font-sm font-light'>
        <div className='flex items-center my-2 flex-row gap-3'>
          <input type="range" min={8} max={100} value={length}  onChange={(e) => {setLength(e.target.value)}}/>
          <label className='px-2' htmlFor="">length: {length}</label>
          <input  type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => setNumberAllowed((prev) => !prev)} />
          <label htmlFor='numberInput'>Number</label>
          <input type="checkbox" defaultChecked={randomChar} onChange={() => setRandomChar((prev) => !prev)} />
          <label >Random Character</label>
        </div>
      </div>
      </div>
     </div>
    </>
  )
}

export default App

