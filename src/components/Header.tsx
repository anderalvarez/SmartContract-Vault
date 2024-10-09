import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck } from 'lucide-react';
import { useWeb3 } from './Web3Provider';

const Header: React.FC = () => {
  const { web3Initialized, account, networkId } = useWeb3();

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <FileCheck size={24} />
          <span className="text-xl font-bold">Smart Contract Registry</span>
        </Link>
        <nav className="flex items-center">
          <ul className="flex space-x-4 mr-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/register" className="hover:text-blue-200">Register</Link></li>
            <li><Link to="/verify" className="hover:text-blue-200">Verify</Link></li>
            <li><Link to="/audit" className="hover:text-blue-200">Audit History</Link></li>
          </ul>
          {web3Initialized ? (
            <div className="text-sm">
              <span className="mr-2">Account: {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Not connected'}</span>
              <span>Network ID: {networkId}</span>
            </div>
          ) : (
            <span className="text-sm">Initializing Web3...</span>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;