import './ToggleSwitch.css'
import { useState } from 'react';

function ToggleSwitch() {
const [isOn, setIsOn] = useState(false)

const handleChange = () => {
  setIsOn(!isOn)
}

  return (
    <>
     <div className={`mainToggle ${isOn ? "backW" : "backB"}`} onClick={handleChange}>
      <div className={`roundToggle `}>
        <span className={`${isOn ? "on" : "off"}`} >
          {isOn ? "ON" : "OFF"}
        </span>
      </div>
     </div>
    </>
  );
}

export default ToggleSwitch;
