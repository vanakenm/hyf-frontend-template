import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './makeReservation.css';
import { updateRequest, getRequest } from '../dataFoodLover';  // Import both updateRequest and getRequest

const MakeReservation = () => {
  const { state: reservedata } = useLocation();  // Get the offer data passed from OffersDetailListFunction.jsx
  const [quantity, setQuantity] = useState(1);
  const [pickupTime, setPickupTime] = useState('12:00');
  const navigate = useNavigate();

  const handleReserveClick = () => {
    // Create a new reservation object
    const newReservation = {
      name: reservedata.name,
      description: reservedata.description,
      pickuptime: pickupTime,
      unit: quantity,
    };

    // Update the request array in dataFoodLover.js
    updateRequest(newReservation);  // Call the function to update the request array
    


    // Navigate to the reservation list (or any other page)
    navigate('/reservation-list');
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
<select
  value={quantity}
  onChange={(e) => setQuantity(e.target.value)}
>
  <option value="" disabled>Select Quantity</option>
  {Array.from({ length: reservedata.unit }, (_, i) => i + 1).map((num) => (
    <option key={num} value={num}>
      {num}
    </option>
  ))}
</select>

      </div>

      <div>
        <label>Pickup time</label>
        <select value={pickupTime} onChange={(e) => setPickupTime(e.target.value)}>
          <option value="12:00">10:00</option>
          <option value="13:00">12:00</option>
          <option value="14:00">18:00</option>
        </select>
      </div>

      <button onClick={handleReserveClick}>Confirm Reservation</button>
    </div>
  );
};

export default MakeReservation;
