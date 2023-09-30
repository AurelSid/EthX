"use client";
import {
  provider,
  signer,
  contract,
} from "../ContractFunctions/importContract";
import { ethers } from "ethers";
import React, { useContext } from "react";
import { MyContext } from "../Mycontext";
import { useState, useEffect } from "react";

const connect = () => {
  const { userConnected, setUserConnected } = useContext(MyContext);

  async function runSignUp() {
    try {
      const tx = await contract.connect(signer).signup(inputValue);
      await tx.wait();
      const result = await contract.connect(signer).getSignerUsername();
      console.log("Transaction mined:", tx.hash);
      console.log("User connected! Username:", { result });
      setUserConnected(true);
    } catch (error) {
      console.error("Error executing contract function:", error);
    }
  }
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  return (
    <div className="w-full h-30 p-5 rounded-xl text-blue-300 bg-slate-700 m-2">
      {!userConnected ? (
        <form className="p-5 bg-slate-600 rounded-lg">
          <label>
            <div className="m-2">Username:</div>
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              className="rounded-md w-full h-8 p-3"
              placeholder="Choose a username"
            />
          </label>
        </form>
      ) : null}
      <div className="flex m-auto justify-center items-center">
        <button className="p-2 bg-slate-800 rounded-lg m-3" onClick={runSignUp}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default connect;
