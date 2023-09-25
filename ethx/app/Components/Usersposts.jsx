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

const Usersposts = () => {
  async function runGetUsersPosts() {
    try {
      const userAddress = await signer.getAddress();
      const tx = await contract.connect(signer).getUserPosts(userAddress);

      console.log("Transaction mined:", tx.hash);
      console.log(tx);
    } catch (error) {
      console.error("Error executing contract function:", error);
    }
  }

  return (
    <div className="m-3">
      <button
        className="bg-slate-800 text-blue-300 p-3 text-xl rounded-md flex m-auto "
        onClick={runGetUsersPosts}
      >
        Get Users Posts
      </button>
      <div></div>
    </div>
  );
};

export default Usersposts;
