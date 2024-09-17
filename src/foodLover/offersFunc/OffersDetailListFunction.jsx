// OffersDetailListFunction.jsx

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './offersDetailListFunction.css'

const OffersDetailListFunction = () => {
  const { state: offer } = useLocation();  // Retrieve the offer data passed via state
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/make-reservation', { state: offer });  // Pass the offer to MakeReservation.jsx
  };

  return (
    <div className="offer-detail">
      <h1>{offer.name}</h1>
      <h1>{offer.restaurant}</h1>
      <h4>{offer.date}</h4>
      <p>{offer.description}</p>
      <div>
      <h1>{offer.unit}</h1>
        <p>units left</p>
      </div>
      
      <button onClick={handleReserveClick}>I like this! Reserve</button>
    </div>
  );
};

export default OffersDetailListFunction;
