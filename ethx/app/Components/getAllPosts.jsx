"use client";
import {
  provider,
  signer,
  contract,
} from "../ContractFunctions/importContract";
import React, { useState, useEffect, useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaShareSquare } from "react-icons/fa";
import { MyContext } from "../Mycontext";

const GetAllPosts = () => {
  const { postCreated, setpostCreated } = useContext(MyContext);
  const [posts, setPosts] = useState([]);

  async function runGetAllPosts() {
    try {
      const tx = await contract.connect(signer).getAllPosts();
      setPosts(tx);

      console.log(tx);
    } catch (error) {
      console.error("Error executing contract function:", error);
    }
  }

  async function handleLikePost(postId, author) {
    try {
      await contract.connect(signer).likePost(postId, author);
    } catch (error) {
      alert("You like you own posts? Thats kind of lame :'(");
      console.error("Error executing contract function:", error);
    }
  }

  useEffect(() => {
    runGetAllPosts();
  }, [postCreated]);

  return (
    <div className="m-3">
      {posts.map((post, index) => (
        <div key={index} className="w-full bg-slate-700 m-2 p-4 rounded-lg">
          <h1 className="bg-white w-full rounded-ms p-3 text-blue-500">
            {post.text}
          </h1>
          <div className="flex mt-3 text-blue-300">
            <div
              className="m-3 flex justify-center items-center"
              onClick={() => handleLikePost(post.postid, post.author)}
            >
              <AiFillHeart />
              {post.likes}
            </div>
            <div className="m-3 flex justify-center items-center">
              <FaShareSquare />
              {post.shares}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetAllPosts;
