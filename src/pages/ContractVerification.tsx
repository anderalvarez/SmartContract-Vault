import React, { useState } from 'react';
import { ethers } from 'ethers';
import { useWeb3 } from '../components/Web3Provider';
import { getWeb3, verifyContract } from '../utils/web3';

const ContractVerification: React.FC = () => {
  const [contractAddress, setContractAddress] = useState('');
  const [verificationResult, setVerificationResult] = useState('');
  const { web3Initialized, account } = useWeb3();

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setVerificationResult('Verifying...');

    if (!web3Initialized || !account) {
      setVerificationResult('Please connect to Web3 provider (e.g., MetaMask) to verify a contract.');
      return;
    }

    try {
      // Validate Ethereum address
      if (!ethers.utils.isAddress(contractAddress)) {
        throw new Error('Invalid Ethereum address');
      }

      // Use the verifyContract function from web3.ts
      const [isVerified, message] = await verifyContract(contractAddress);

      if (isVerified) {
        setVerificationResult('Contract verified successfully! This contract is registered and authentic.');
      } else {
        setVerificationResult(`Verification failed: ${message}`);
      }
    } catch (error) {
      setVerificationResult(`Verification failed: ${error.message}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Verify Smart Contract</h1>
      {!web3Initialized && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
          <p>Please connect to a Web3 provider (e.g., MetaMask) to verify a contract.</p>
        </div>
      )}
      <form onSubmit={handleVerify} className="space-y-4">
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
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:bg-gray-400"
          disabled={!web3Initialized}
        >
          Verify Contract
        </button>
      </form>
      {verificationResult && (
        <p className="mt-4 text-center font-medium">{verificationResult}</p>
      )}
    </div>
  );
};

export default ContractVerification;