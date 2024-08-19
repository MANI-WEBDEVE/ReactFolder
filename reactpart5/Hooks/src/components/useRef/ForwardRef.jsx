import { forwardRef, useId, useRef } from "react";

function ForwardRef() {
  const username = useRef(null);
  const password = useRef(null);
  const email = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
     const data =  `username: ${username.current.value} password: ${password.current.value} password: ${email.current.value}`
    console.log({data})
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <AfterReact19V label='username' ref={username} />
        <AfterReact19V label='password' ref={password}/>
        <AfterReact19V label='Email' ref={email}/>

        {/* <BeforeReact19V label='username' ref={username} />
        <BeforeReact19V label='password' ref={password}/>
        <BeforeReact19V label='Email' ref={email}/> */}
        <button>Submit Here</button>
      </form>
    </div>
  );
}

export default ForwardRef;

//* const BeforeReact19V = forwardRef((props, ref) => {
//*   const id = useId();
//*   return (
//*     <div>
//*       <label htmlFor={id}>{props.label}</label>
//*       <input type="text" ref={ref} />
//*       {/* <label htmlFor={id}>{props.label}</label>
//*       <input type="text" ref={ref} /> */}
//*     </div>
//*   );
//* });
const AfterReact19V = (props) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      <input type="text" ref={props.ref} />
      {/* <label htmlFor={id}>{props.label}</label>
      <input type="text" ref={ref} /> */}
    </div>
  );
};
