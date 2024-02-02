import React from 'react';
import Tour from '../../molecules/Tour/Tour';
import "./Tours.css"

const Tours = ({ tours, removeTour }) => {

  const addToFavorites = async (tourData) => {
    try {
      const response = await fetch('/api/add-to-favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tourData)
      });
      const data = await response.json();
      console.log('Tour added to favorites:', data);
    } catch (error) {
      console.error('Error adding tour to favorites:', error);
    }
  };


  return (
    <section>
      <div className="title">
        <h2>All tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tours">
       {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} addToFavorites={addToFavorites} />;
      })}
      </div>
    </section>
  );
};

export default Tours;
