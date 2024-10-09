import React, { useState, useEffect } from 'react';

interface AuditEntry {
  id: number;
  contractAddress: string;
  action: string;
  timestamp: string;
}

const AuditHistory: React.FC = () => {
  const [auditEntries, setAuditEntries] = useState<AuditEntry[]>([]);

  useEffect(() => {
    // Simulated API call to fetch audit entries
    const fetchAuditEntries = async () => {
      // In a real application, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockEntries: AuditEntry[] = [
        { id: 1, contractAddress: '0x1234...5678', action: 'Contract Registered', timestamp: '2023-04-15 10:30:00' },
        { id: 2, contractAddress: '0xabcd...efgh', action: 'Contract Verified', timestamp: '2023-04-15 11:45:00' },
        { id: 3, contractAddress: '0x9876...5432', action: 'Contract Updated', timestamp: '2023-04-16 09:15:00' },
      ];
      
      setAuditEntries(mockEntries);
    };

    fetchAuditEntries();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Audit History</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contract Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {auditEntries.map((entry) => (
              <tr key={entry.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{entry.contractAddress}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.action}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuditHistory;