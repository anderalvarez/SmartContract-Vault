import Web3 from 'web3';
import ContractRegistryABI from '../contracts/ContractRegistry.json';
import ContractVerifierABI from '../contracts/ContractVerifier.json';

let web3: Web3 | null = null;
let contractRegistry: any = null;
let contractVerifier: any = null;

const REGISTRY_ADDRESS = '0x...'; // Address of deployed ContractRegistry
const VERIFIER_ADDRESS = '0x...'; // Address of deployed ContractVerifier

export const initWeb3 = async (): Promise<Web3> => {
  if (web3) return web3;

  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      initContracts();
    } catch (error) {
      console.error("User denied account access");
    }
  } else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
    initContracts();
  } else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    throw new Error('No Ethereum provider detected');
  }

  return web3;
};

const initContracts = () => {
  if (web3) {
    contractRegistry = new web3.eth.Contract(ContractRegistryABI.abi, REGISTRY_ADDRESS);
    contractVerifier = new web3.eth.Contract(ContractVerifierABI.abi, VERIFIER_ADDRESS);
  }
};

export const getWeb3 = (): Web3 => {
  if (!web3) {
    throw new Error('Web3 is not initialized. Call initWeb3() first.');
  }
  return web3;
};

export const getAccounts = async (): Promise<string[]> => {
  const web3Instance = getWeb3();
  return await web3Instance.eth.getAccounts();
};

export const getNetworkId = async (): Promise<number> => {
  const web3Instance = getWeb3();
  return await web3Instance.eth.net.getId();
};

export const registerContract = async (address: string, abi: string, from: string): Promise<void> => {
  if (!contractRegistry) throw new Error('Contract Registry not initialized');
  await contractRegistry.methods.registerContract(address, abi).send({ from });
};

export const verifyContract = async (address: string): Promise<[boolean, string]> => {
  if (!contractVerifier) throw new Error('Contract Verifier not initialized');
  return await contractVerifier.methods.verifyContract(address).call();
};

export const getContractDetails = async (address: string): Promise<[string, string, number]> => {
  if (!contractVerifier) throw new Error('Contract Verifier not initialized');
  return await contractVerifier.methods.getContractDetails(address).call();
};