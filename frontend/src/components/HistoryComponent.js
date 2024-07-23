// src/components/HistoryComponent.js
import React from 'react';

const HistoryComponent = ({ history }) => {
  if (!history || history.length === 0) return <p>No history available.</p>;

  return (
    <div>
      <h2>History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryComponent;
