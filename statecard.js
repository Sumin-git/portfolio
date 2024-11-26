import React from 'react';

const StatCard = ({ title, value, change, positive }) => (
  <div className="stat-card">
    <h3>{title}</h3>
    <p>{value}</p>
    <span style={{ color: positive ? 'green' : 'red' }}>
      {positive ? '+' : '-'}{change}%
    </span>
  </div>
);

export default StatCard;
