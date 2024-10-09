import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Web3Provider } from './components/Web3Provider';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContractRegistry from './pages/ContractRegistry';
import ContractVerification from './pages/ContractVerification';
import AuditHistory from './pages/AuditHistory';

function App() {
  return (
    <Web3Provider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<ContractRegistry />} />
              <Route path="/verify" element={<ContractVerification />} />
              <Route path="/audit" element={<AuditHistory />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Web3Provider>
  );
}

export default App;