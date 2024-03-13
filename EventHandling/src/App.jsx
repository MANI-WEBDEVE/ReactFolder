import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const [name, setName] = useState("inam");
  // const [form, setForm] = useState({email: "" , phone: "" })
  const [form, setForm] = useState({});

  const handlealert = () => {
    alert("this is wrong way");
  };
  const hadlepara = () => {
    alert("this thing valid IP");
  };
  const handleChange = (e) => {
    // setName(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  return (
    <>
      <div className="buuton">
        <button onClick={handlealert}>click alert</button>
      </div>
      <div className="box" onMouseOver={hadlepara}>
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <input
        type="text"
        name="email"
        value={form.email ? form.email : ""}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        value={form.phone ? form.phone : ""}
        onChange={handleChange}
      />
      {/* <input type="text" name="email" value={form.email} onChange={handleChange} /> */}
      {/* <input type="text" name= "phone" value={form.phone} onChange={handleChange} /> */}
    </>
  );
}

export default App;
