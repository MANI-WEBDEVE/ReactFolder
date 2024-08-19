import { createContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const data = "Muhammad Inam";
  const data2 = 18;
  return (
    <>
      <BioContext.Provider value={{data, data2}}>{children}</BioContext.Provider>
    </>
  );
};
