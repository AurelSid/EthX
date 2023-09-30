"use client";
import {
  provider,
  signer,
  contract,
} from "../ContractFunctions/importContract";
import { useState, useEffect } from "react";
import { MyContext } from "../Mycontext";
import React, { useContext } from "react";
const createapost = () => {
  const { postCreated, setpostCreated } = useContext(MyContext);

  async function runCreatePost() {
    try {
      const tx = await contract.connect(signer).createPost(inputValue);

      await tx.wait();
      console.log("Transaction mined:", tx.hash);
      console.log("Post Created:");
      setpostCreated(!postCreated);
    } catch (error) {
      console.error("Error executing contract function:", error);
      alert("Please Signup");
    }
  }
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="w-full h-30 p-5 rounded-xl text-blue-300 bg-slate-700 m-2">
      <form className="p-5  bg-slate-600 rounded-lg w-full">
        <label>
          <div className="m-2">Post:</div>
          <input
            placeholder="Hi! What are you thinking about?"
            type="text"
            name="name"
            onChange={handleInputChange}
            className="h-8 p-3 rounded-lg w-full"
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
