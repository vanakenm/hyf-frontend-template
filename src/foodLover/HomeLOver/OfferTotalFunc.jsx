import React from 'react';
import './OfferTotalFunc.css'; // Import CSS file
import { useLocation, useNavigate } from 'react-router-dom';
import {offerstotal } from '../dataFoodLover';


const OfferTotal = () => {
  const { offersNum, offersUnit, offersUnitRest } = offerstotal;
  const { state: offer } = useLocation();  // Retrieve the offer data passed via state
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/offerslover', { state: offer });  // Pass the offer to MakeReservation.jsx
  };

  return (
    <div className="offerstotal">
      <div className="offerstotal-content">
        <div className="offerstotal-item">
          <p className="offerstotal-value">{offersNum}</p>
          <p className="offerstotal-label">offers</p>
        </div>
        <div className="offerstotal-item">
          <p className="offerstotal-value">{offersUnit}</p>
          <p className="offerstotal-label">units</p>
        </div>
        <div className="offerstotal-item">
          <p className="offerstotal-value">{offersUnitRest}</p>
          <p className="offerstotal-label">units left</p>
        </div>
      </div>
      
      {/* Conditional button or message */}
      {offersNum === 0 && offersUnit === 0 && offersUnitRest === 0 ? (
        <p className="offerstotal-message">Too soon... there are no offers yet for today. Come back later!</p>
      ) : offersUnitRest === 0 ? (
        <p className="offerstotal-message">Bummer, too late! Come back tomorrow to check out new offers!</p>
      ) : (
        <button onClick={handleReserveClick}  className="offerstotal-button">Check out the offers</button>
      )}
    </div>
  );
};

export default OfferTotal;
