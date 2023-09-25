"use client";
import {
  provider,
  signer,
  contract,
} from "../ContractFunctions/importContract";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { requestAccount } from "../connectMetamask";
import { MyContext } from "../Mycontext";
import React, { useContext } from "react";
const createapost = () => {
  const { userConnected, setUserConnected } = useContext(MyContext);

  async function runCreatePost() {
    try {
      const tx = await contract.connect(signer).createPost(inputValue );

      await tx.wait(); 
      console.log("Transaction mined:", tx.hash);
      console.log("Post Created:");
    } catch (error) {
      console.error("Error executing contract function:", error);
    }
  }
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="w-full h-30 p-5 rounded-xl text-blue-300 bg-slate-700">
      <form className="p-5  bg-slate-600 rounded-lg">
        <label>
          <div className="m-2">Post:</div>
          <input
            placeholder="Hi! What are you thinking about?"
            type="text"
            name="name"
            onChange={handleInputChange}
            className="h-8 w-80 p-3 rounded-lg"
          />
        </label>
      </form>
      <div className="flex m-auto justify-center items-center">
        {" "}
        <button
          className="p-2 bg-slate-800 rounded-lg m-3"
          onClick={runCreatePost}
        >
          Post!
        </button>
      </div>
    </div>
  );
};

export default createapost;
