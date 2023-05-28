import React, { useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TransactionVolumeChart = ({lineData}) => {
    console.log("linedata===>",lineData)

    const result = lineData.reduce((acc, obj) => {
        const timestamp = parseInt(obj.timeStamp);
        const date = new Date(timestamp * 1000).toLocaleDateString();
      
        if (!acc[date]) {
          acc[date] = { date: date, transactions: 1 };
        } else {
          acc[date].transactions++;
        }
      
        return acc;
      }, {});
      
      const formattedResult = Object.values(result);

      
      console.log(formattedResult,"formated======>");
  // Fake example data

  const data = [
    { date: '2023-05-01', transactions: 10 },
    { date: '2023-05-02', transactions: 15 },
    { date: '2023-05-03', transactions: 20 },
    { date: '2023-05-04', transactions: 25 },
    { date: '2023-05-05', transactions: 18 },
    { date: '2023-05-06', transactions: 15 },
    { date: '2023-05-07', transactions: 20 },
    { date: '2023-05-08', transactions: 25 },
    { date: '2023-05-09', transactions: 18 },
  
  ];

  return (
    <LineChart width={1200} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="transactions" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default TransactionVolumeChart;
