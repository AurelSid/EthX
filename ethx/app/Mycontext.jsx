
"use client"
import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [userConnected, setUserConnected] = useState(false);

  return (
    <MyContext.Provider value={{ userConnected, setUserConnected }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
