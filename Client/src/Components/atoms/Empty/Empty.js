import React from 'react';
import "./Empty.css"

const Empty = ({ fetchTours }) => {
  return (
    <main>
    <div className='title'>
      <h2>no tours left</h2>
      <button className='btn' onClick={() => fetchTours()}>
        refresh
      </button>
    </div>
  </main>
  );
};

export default Empty;