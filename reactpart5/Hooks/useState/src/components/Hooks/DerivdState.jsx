import { useState } from "react";

function DerivdState() {
  const [user, setUser] = useState([
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 35  } ,
    { name: "Alice", age: 40 },
    { name: "John", age: 25 },
  ]);

  const userCount = user.length;


  const userAverage = (user.reduce((accum, currElem) => {
    return accum + currElem.age;
  }, 0) ) 


  return <>
  <section>
    <ol>
        {
            user.map((item,index)=>{
                return<>
                <li key={index}>{item.name} - {item.age}</li>
                <h5>{userCount}</h5>
                <h6>{userAverage}</h6>
                </> 
            })
        }
    </ol>
  </section>
  
  
  </>;
}

export default DerivdState;
