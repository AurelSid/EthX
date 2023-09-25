import { MyContext } from "./Mycontext";
import React, { useContext } from "react";

export const ConnectMetamask = () => {
  const { userConnected, setUserConnected } = useContext(MyContext);
  
 
};

export default ConnectMetamask;
