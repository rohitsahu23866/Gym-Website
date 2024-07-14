import React, { useState, useEffect } from 'react';

const WeightTracker = () => {
  const [weightLogs, setWeightLogs] = useState([]);
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const storedLogs = JSON.parse(localStorage.getItem('weightLogs'));
    if (storedLogs) {
      setWeightLogs(storedLogs);
    }
  }, []);

  const handleAddLog = () => {
    const newLog = { date, weight: parseFloat(weight) };
    const updatedLogs = [...weightLogs, newLog];
    setWeightLogs(updatedLogs);
    localStorage.setItem('weightLogs', JSON.stringify(updatedLogs));
    setWeight('');
    setDate('');
  };

  const handleResetLogs = () => {
    localStorage.removeItem('weightLogs');
    setWeightLogs([]);
  };

  // Calculate weight gain or loss
  const calculateChange = (currentWeight, previousWeight) => {
    const change = currentWeight - previousWeight;
    return change.toFixed(1); // Round to 1 decimal place
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="bg-gradient-to-r from-orange-400 to-pink-600 opacity-90 py-10 px-5 rounded-lg">
      <h1 className="text-4xl font-bold mb-8 text-center">Weight Tracker</h1>
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <label className="block mb-2">Date</label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            className="w-full border-2 p-2 rounded"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2">Weight (kg)</label>
          <input 
            type="number" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
            className="w-full border-2 p-2 rounded"
          />
        </div>
        <div className="flex justify-between mb-6">
          <button 
            onClick={handleAddLog} 
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Add Log
          </button>
          <button 
            onClick={handleResetLogs} 
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Reset Logs
          </button>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Weight Logs</h2>
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Weight (kg)</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Change (kg)</th>
              </tr>
            </thead>
            <tbody>
              {weightLogs.map((log, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="text-left py-3 px-4">{log.date}</td>
                  <td className="text-left py-3 px-4">{log.weight}</td>
                  <td className={`text-left py-3 px-4 ${index > 0 ? calculateChange(log.weight, weightLogs[index - 1].weight) >= 0 ? 'text-green-500' : 'text-red-500' : ''}`}>
                    {index > 0 ? calculateChange(log.weight, weightLogs[index - 1].weight) : 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WeightTracker;
