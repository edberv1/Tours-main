import React, { useState } from 'react';
import Button from '../../atoms/Buttons/Remove';
import "./Tour.css"

const Tour = ({ id, image, info, name, price, removeTour, addToFavorites }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />

      <button onClick={() => addToFavorites({ id, image, info, name, price })}>Add to Favorites</button>
      
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'read less' : '  read more'}
          </button>
        </p>
        
       <Button id={id} removeTour={removeTour}/>

      </footer>
    </article>
  );
};

export default Tour;
