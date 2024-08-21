import { useBioProvider } from "./useContextAPI/ContextApi";

function ContextTest() {
  const { data, data2 } = useBioProvider();

  return <div className="text-2xl " >heloo second : {data}</div>;
}

export default ContextTest;
