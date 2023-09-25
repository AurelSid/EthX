"use client";
import React, { useContext } from "react";
import {
  provider,
  signer,
  contract,
} from "../ContractFunctions/importContract";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { connectMetamask } from "../connectMetamask";
import { MyContext } from "../Mycontext";
const Navbar = () => {
  const { userConnected, setUserConnected } = useContext(MyContext);

  const requestAccount = async () => {
    console.log("Requesting account");
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        if (accounts.length === 0) {
          await window.ethereum.request({ method: "eth_requestAccounts" });
        } else {
          console.log("MetaMask is already unlocked");
          setUserConnected(true);
          console.log(userConnected);
        }

        console.log("Accounts:", accounts);
      } catch (error) {
        console.error("Error requesting accounts:", error);
      }
    } else {
      console.log("MetaMask not detected");
    }
  };

  const navElements = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    // Add more navigation elements as needed
  ];

  return (
    <div className="bg-slate-800 px-4 py-2">
      {" "}
      <nav className="grid grid-cols-3">
        <div className="text-blue-100">
          <h1 className="text-xl font-bold">ETHX</h1>
        </div>
        <ul className="flex justify-center items-center text-blue-100">
          {navElements.map((element, index) => (
            <li key={index} className="m-2">
              <a href={element.link}>{element.name}</a>
            </li>
          ))}
        </ul>
        <div className="text-end">
          <button
            className="bg-blue-400 px-3 py-1 rounded-full"
            onClick={requestAccount}
          >
            {userConnected ? <h1>UserCOnnected</h1> : <h1>CONNECT</h1>}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
