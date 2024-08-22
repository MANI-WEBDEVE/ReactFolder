// import { useCallback, useState, memo } from "react";

// const  Button =memo(({ onClick, children }) => {
//   console.log(`Rendering button: ${children}`);

//   return (
//     <button
//       className={` flex items-center justify-center text-black mb-4 px-4 py-3 ${
//         children === "Increment"
//           ? "bg-green-950/80 border-black"
//           : "bg-red-950/90 border-black"
//       }`}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// });

// export default function UseCallback() {
//   const [count, setCount] = useState(0);

//   const increament = useCallback(() => {
//     console.log("inside Increment...");
//     setCount((prev) => prev + 1);
//   }, []);

//   const decrement = useCallback(() => {
//     console.log("inside Decremnet");
//     setCount((prev) => prev - 1);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center h-lvh">
//       <h1 className="font-bold text-4xl mb-4 ">{count}</h1>
//       <Button onClick={increament}>Increment</Button>
//       <Button onClick={decrement}>Decrement</Button>
//     </div>
//   );
// }


// import { memo, useState } from 'react';

// export default function MyApp() {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   return (
//     <>
//       <label>
//         Name{': '}
//         <input value={name} onChange={e => setName(e.target.value)} />
//       </label>
//       <label>
//         Address:
//         <input value={address} onChange={e => setAddress(e.target.value)} />
//       </label>
//       <Greeting name={name} />
//     </>
//   );
// }

// const Greeting = memo(function Greeting({ name }) {
//   console.log("Greeting was rendered at", new Date().toLocaleTimeString());
//   return <h3>Hello{name && ', '}{name}!</h3>;
// });


import { memo, useState } from 'react';

export default function MyApp() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <label>
        Name{': '}
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Address{': '}
        <input value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  );
}

const Greeting = memo(function Greeting({ name }) {
  console.log('Greeting was rendered at', new Date().toLocaleTimeString());
  const [greeting, setGreeting] = useState('Hello');
  return (
    <>
      <h3>{greeting}{name && ', '}{name}!</h3>
      <GreetingSelector value={greeting} onChange={setGreeting} />
    </>
  );
});

function GreetingSelector({ value, onChange }) {
  return (
    <>
      <label>
        <input
          type="radio"
          checked={value === 'Hello'}
          onChange={e => onChange('Hello')}
        />
        Regular greeting
      </label>
      <label>
        <input
          type="radio"
          checked={value === 'Hello and welcome'}
          onChange={e => onChange('Hello and welcome')}
        />
        Enthusiastic greeting
      </label>
    </>
  );
}
