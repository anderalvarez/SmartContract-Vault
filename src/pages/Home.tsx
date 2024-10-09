import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, Search, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Smart Contract Registry</h1>
      <p className="text-xl mb-12">Secure and verify your Ethereum smart contracts with ease.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/register" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FileCheck size={48} className="mx-auto mb-4 text-blue-600" />
          <h2 className="text-2xl font-semibold mb-2">Register Contract</h2>
          <p>Add your smart contract to our secure registry.</p>
        </Link>
        
        <Link to="/verify" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <Search size={48} className="mx-auto mb-4 text-green-600" />
          <h2 className="text-2xl font-semibold mb-2">Verify Contract</h2>
          <p>Check the authenticity of registered contracts.</p>
        </Link>
        
        <Link to="/audit" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <Clock size={48} className="mx-auto mb-4 text-purple-600" />
          <h2 className="text-2xl font-semibold mb-2">Audit History</h2>
          <p>View the history of changes and audits.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;