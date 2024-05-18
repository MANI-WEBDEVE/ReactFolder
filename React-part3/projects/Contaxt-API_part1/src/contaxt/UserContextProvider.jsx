import { useState } from "react";
import React from "react";
import UserContaxt from "./UserContaxt";

const UserContextProvider = ({ Children }) => {
  const [data, setData] = useState(null);
  return (
    <UserContaxt.Provider value={{ data, setData }}>
      {Children}
    </UserContaxt.Provider>
  );
};

export default UserContextProvider;
