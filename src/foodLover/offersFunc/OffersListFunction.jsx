// OffersListFunction.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { offers } from '../dataFoodLover';  
import './offersListFunction.css'


const OffersListFunction = () => {
  const navigate = useNavigate();

  const handleOfferClick = (offer) => {
    navigate('/offers-detail', { state: offer });  // Pass the clicked offer to the OffersDetailListFunction.jsx
  };

  return (
    <div className="offers-list">
      <h1>Today's Offers</h1>
      {offers.length > 0 && <h3>{offers[0].date}</h3>}
      <ul>
        {offers.map((offer, index) => (
          <li key={index} className="offer-item" onClick={() => handleOfferClick(offer)}>
            <div>
              <h2>{offer.name} - {offer.restaurant}</h2>
              <p>{offer.unit} units left</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OffersListFunction;
