import {useRef} from 'react'
const FirstUseRef = () => {
    
    const userName = useRef(null);
    const password = useRef();



    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('lo') 
        console.log(userName)
    }



  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" ref={userName} placeholder="Enter your Name" />
        <br />
        <input type="password" placeholder="Enter your Password" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FirstUseRef
