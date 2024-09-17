// MakeReservation.jsx

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './makeReservation.css'
import { useNavigate } from 'react-router-dom';

const MakeReservation = () => {
  const { state: reservedata } = useLocation();  // Get the offer data passed from OffersDetailListFunction.jsx
  const [quantity, setQuantity] = useState(1);
  const [pickupTime, setPickupTime] = useState('12:00');



 
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/reservation-list');  // Pass the offer to MakeReservation.jsx
  };

  return (
    <div className="make-reservation">
      <h1>Make a reservation for</h1>
      <h2>{reservedata.name}</h2>
      <h2>{reservedata.restaurant}</h2>
      <h4>{reservedata.date}</h4>
      <p>{reservedata.description}</p>
      <h4>{reservedata.unit} units left</h4>

      <div>
        <label>Quantity</label>
        <input
          type="number"
          min="1"
          max={reservedata.unit}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div>
        <label>Pickup time</label>
        <select value={pickupTime} onChange={(e) => setPickupTime(e.target.value)}>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
        </select>
      </div>

      <button  onClick={handleReserveClick}>Confirm Reservation</button>
    </div>
  );
};

export default MakeReservation;
