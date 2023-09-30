import { ethers } from "ethers";
import { constractAbi } from "../abi";
const infuraProjectId = "ethx";
const network = "sepolia";
const jsonRpcUrl = `https://${network}.alchemyapi.io/v2/${infuraProjectId}`;

const provider = new ethers.providers.Web3Provider(window.ethereum);

const signer = provider.getSigner();

const daiAddress = "0x359fc3e721e7D1AaA53cA4edEA74af431982f165";

const daiAbi = constractAbi
const contract = new ethers.Contract(daiAddress, daiAbi, provider);

export { provider, signer, contract };
