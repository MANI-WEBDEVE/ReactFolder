import { createContext, useContext } from "react";

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

export const useBioProvider = () => {
  const context = useContext(BioContext)
  return context
}