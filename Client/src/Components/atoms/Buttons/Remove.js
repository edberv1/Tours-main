import React from 'react';
import './Remove.css';

const Remove = ({ id, removeTour }) => {
  return (
    <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
    </button>
  );
};

export default Remove;