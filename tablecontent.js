import React from 'react';
import './portfolio.css';

const DetailsTable = () => {
  // Sample data
  const data = [
    {
      repository: 'Project Alpha',
      contributions: 25,
      lastUpdated: '2024-11-01',
      status: 'Active',
    },
    {
      repository: 'Expense Tracker',
      contributions: 10,
      lastUpdated: '2024-10-21',
      status: 'Completed',
    },
    {
      repository: 'Hospital Management System',
      contributions: 45,
      lastUpdated: '2024-11-10',
      status: 'In Progress',
    },
    {
      repository: 'Game Puzzles',
      contributions: 18,
      lastUpdated: '2024-09-15',
      status: 'Completed',
    },
  ];

  return (
    <div className="details-table">
      <table>
        <thead>
          <tr>
            <th>Repository Name</th>
            <th>Contributions</th>
            <th>Last Updated</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.repository}</td>
              <td>{item.contributions}</td>
              <td>{item.lastUpdated}</td>
              <td className={item.status === 'Completed' ? 'completed' : 'active'}>
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsTable;
