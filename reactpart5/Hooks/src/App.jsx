//* import DerivdState from "./components/Hooks/DerivdState";

import ContextTest from "./components/ContextTest";
import ParentComponent from "./components/PropDrilling";
import { BioProvider } from "./components/useContextAPI/ContextApi";
import Home from "./components/useContextAPI/Home";
import { DarkLight, ThemeProvider } from "./components/useContextAPI/LightAndDarmMode";
import UseReducer from "./components/UseReducer/UseReducer";
import "./index.css"

// import HowToFetchApi from "./components/useEffect/HowToFetchApi";
// import FirstUseRef from "./components/useRef/FirstUseRef";
// import UseId from "./components/useId/UseId";


//* import ToggleSwitch from "./projectHook/toggleSwitch/ToggleSwitch";
//* import UesStateChallange from "./useState-challange/UesStateChallange";
//* import UseEffect01 from "../src/components/useEffect/UseEffect01";
// import CleanUpFunctionUseEffect from "./components/useEffect/CleanUpFunctionUseEffect";
// import EffectChallenge from "./components/useEffect/EffectChallenge";



function App() {
  return (
    <>
      {/* <UseState>

      </UseState>
      <Sibling/> */}
      {/*  <UseStateChallange/> */}
      {/* <DerivdState /> */}
      {/* <ToggleSwitch/> */}
      {/* <UesStateChallange/> */}  

      {/* //* useEffect Import */}
      {/* <UseEffect01/> */}
      {/* <EffectChallenge /> */}
      {/* <CleanUpFunctionUseEffect/> */}
      {/* <HowToFetchApi/> */}
      {/* <FirstUseRef/> */}
      {/* <ForwardRef/> */}
      {/* <UseId/> */}
      {/* <ParentComponent/> */}
      {/* <h1 className="text-2xl font-bold ">Heloo </h1>
      * Context API Syntex
      <BioProvider>
        <Home/>
      <ContextTest/>
      </BioProvider> */}
      {/* <ThemeProvider>
        <DarkLight/>
      </ThemeProvider> */}
      {/* //* Context API Syntex */}

        <UseReducer/>
    </>
  );
}

export default App;

//* export const Sibling = () => {
//*   console.log('Sibling Component')
//*   return (
//*     <>
//*     <h1>Component Siblling</h1>
//*     </>
//*   )
//* }ff
