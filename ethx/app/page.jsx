"use client";
import { provider, signer, contract } from "./ContractFunctions/importContract";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { requestAccount } from "./connectMetamask";
import Connect from "./Components/connect";
import Createapost from "./Components/createapost";
import Usersposts from "./Components/Usersposts";
import GetAllPosts from "./Components/getAllPosts";
export default function Home() {
  const [userConnected, setUserConnected] = useState(false);
  return (
    <main className=" bg-slate-500 w-ful flex justify-center items-center h-full min-h-screen">
      <div className="w-full m-10 md:grid  md:grid-cols-2 justify-center items-center gap-2">
        <div className="justify-center  items-center ">
          <Createapost />
          <Connect />
        </div>
        <div className="w-2/3 m-auto">
          <GetAllPosts />
        </div>
      </div>
    </main>
  );
}
