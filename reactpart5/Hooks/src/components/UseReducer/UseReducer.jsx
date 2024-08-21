import { useReducer } from "react";

export default function UseReducer() {
  //   const reducer = (state, action) => {
  //     if (action.type === "INCREMENT") {
  //       return state + 1;
  //     }
  //     if (action.type === "DECREMENT") {
  //       return state - 1;
  //     }
  //     if (action.type === "REST") {
  //       return (state = 0);
  //     }
  //   };
  const intializeValue = {
    count: 0,
    inc: 2,
    dec: 2,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        console.log({...state, count: state.count + state.inc })
        return {...state, count: state.count + state.inc };

      case "DECREMENT":
        return {...state, count: state.count - state.dec };

        case  "DECREMENT":
            return {count:0}
      case "REST":
        return {...state, count: 0 };

      default:
        {
          count;
        }
        break;
    }
    if (action.type === "DECREMENT" && state.count > 0) {
        return {count: 0}
    }
  };

  //   const [count, dispatch] = useReducer(reducer, 0);
  const [state, dispatch] = useReducer(reducer, intializeValue);

  return (
    <div className="h-lvh flex items-center flex-col justify-center bg-gray-900">
      <h1 className="text-2xl font-bold">{state.count}</h1>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="text-medium rounded-lg border-none p-2 mt-2"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        className="text-medium rounded-lg border-none p-2 mt-2"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "REST" })}
        className="text-medium rounded-lg border-none p-2 mt-2"
      >
        Reset
      </button>
    </div>
  );
}
