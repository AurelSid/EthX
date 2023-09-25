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

const GetAllPosts = () => {

    const [posts, setPosts] = useState([]);

  async function runGetAllPosts() {
    try {
     
      const tx = await contract.connect(signer).getAllPosts();

      console.log("Transaction mined:", tx.hash);
      console.log(tx);
      setPosts(tx);
    } catch (error) {
      console.error("Error executing contract function:", error);
    }
  }

  return (
    <div className="m-3">
      <button
        className="bg-slate-800 text-blue-300 p-3 text-xl rounded-md flex m-auto "
        onClick={runGetAllPosts}
      >
        Get All Posts
      </button>
      <div></div>
      {posts.map((post, index) => (
          <li key={index}>{post.text}</li>
        ))}
    </div>
  );
};

export default GetAllPosts;
