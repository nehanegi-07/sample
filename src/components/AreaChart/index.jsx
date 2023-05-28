import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TransactionVolumeAreaChart = () => {
  // Fake example data
  const data = [
    { date: '2023-05-01', transactions: 10 },
    { date: '2023-05-02', transactions: 15 },
    { date: '2023-05-03', transactions: 20 },
    { date: '2023-05-04', transactions: 15 },
    { date: '2023-05-05', transactions: 18 },
    { date: '2023-05-06', transactions: 15 },
    { date: '2023-05-07', transactions: 20 },
    { date: '2023-05-08', transactions: 25 },
    { date: '2023-05-09', transactions: 18 },
    { date: '2023-05-10', transactions: 25 },
    { date: '2023-05-11', transactions: 18 },
  
  ];

  return (
    <AreaChart width={1400} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="transactions" fill="#8884d8" stroke="#8884d8" />
    </AreaChart>
  );
};

export default TransactionVolumeAreaChart;
