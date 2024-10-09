import React, { createContext, useContext, useState, useEffect } from 'react';
import { initWeb3, getAccounts, getNetworkId } from '../utils/web3';

interface Web3ContextType {
  web3Initialized: boolean;
  account: string | null;
  networkId: number | null;
}

const Web3Context = createContext<Web3ContextType>({
  web3Initialized: false,
  account: null,
  networkId: null,
});

export const useWeb3 = () => useContext(Web3Context);

export const Web3Provider: React.FC = ({ children }) => {
  const [web3Initialized, setWeb3Initialized] = useState(false);
  const [account, setAccount] = useState<string | null>(null);
  const [networkId, setNetworkId] = useState<number | null>(null);

  useEffect(() => {
    const initializeWeb3 = async () => {
      try {
        await initWeb3();
        const accounts = await getAccounts();
        const network = await getNetworkId();
        setAccount(accounts[0]);
        setNetworkId(network);
        setWeb3Initialized(true);
      } catch (error) {
        console.error('Failed to initialize Web3', error);
      }
    };

    initializeWeb3();
  }, []);

  return (
    <Web3Context.Provider value={{ web3Initialized, account, networkId }}>
      {children}
    </Web3Context.Provider>
  );
};