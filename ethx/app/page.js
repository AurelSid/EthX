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
    <main className=" bg-slate-500 w-full flex justify-center items-center h-screen">
      <div>
        <Createapost/>
        <Usersposts/>
        {userConnected ? (
          <p>User Connected.</p>
        ) : (
          <Connect
         
          />
        )}
        <GetAllPosts/>
      </div>
    </main>
  );
}
