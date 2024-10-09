import React, { useState } from 'react';
import { ethers } from 'ethers';
import { useWeb3 } from '../components/Web3Provider';
import { registerContract } from '../utils/web3';

const ContractRegistry: React.FC = () => {
  const [contractAddress, setContractAddress] = useState('');
  const [contractABI, setContractABI] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');
  const { web3Initialized, account } = useWeb3();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegistrationStatus('Registering...');

    if (!web3Initialized || !account) {
      setRegistrationStatus('Please connect to Web3 provider (e.g., MetaMask) to register a contract.');
      return;
    }

    try {
      // Validate Ethereum address
      if (!ethers.utils.isAddress(contractAddress)) {
        throw new Error('Invalid Ethereum address');
      }

      // Validate ABI (basic check)
      try {
        JSON.parse(contractABI);
      } catch {
        throw new Error('Invalid ABI format');
      }

      // Use the registerContract function from web3.ts
      await registerContract(contractAddress, contractABI, account);

      setRegistrationStatus('Contract registered successfully!');
    } catch (error) {
      setRegistrationStatus(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Register Smart Contract</h1>
      {!web3Initialized && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
          <p>Please connect to a Web3 provider (e.g., MetaMask) to register a contract.</p>
        </div>
      )}
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label htmlFor="contractAddress" className="block mb-1 font-medium">
            Contract Address
          </label>
          <input
            type="text"
            id="contractAddress"
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="contractABI" className="block mb-1 font-medium">
            Contract ABI
          </label>
          <textarea
            id="contractABI"
            value={contractABI}
            onChange={(e) => setContractABI(e.target.value)}
            className="w-full px-3 py-2 border rounded-md h-40"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
          disabled={!web3Initialized}
        >
          Register Contract
        </button>
      </form>
      {registrationStatus && (
        <p className="mt-4 text-center font-medium">{registrationStatus}</p>
      )}
    </div>
  );
};

export default ContractRegistry;