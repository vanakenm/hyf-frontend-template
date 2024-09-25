import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './makeReservation.css';

const MakeReservation = () => {
  const { state: offer } = useLocation();  // Get the offer details
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [pickupTime, setPickupTime] = useState('12:00');

  const handleConfirm = () => {
    // Send reservation data to the backend (mocked here)
    const reservationData = {
      provider_id: offer.provider_id,
      quantity,
      pickupTime,
      date: offer.date
    };
    console.log('Reservation confirmed:', reservationData);
    
    // Navigate back to reservation page or success page
    navigate('/reservation-list');
  };

  return (
    <div className="make-reservation">
      <h1>Make a reservation for {offer.provider_name}</h1>
      <p>{offer.standard_description}</p>
      <p>{offer.vegan_description}</p>
      <p>{offer.diabetic_description}</p>

      <div className="reservation-details">
        <label>Quantity</label>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {[...Array(offer.standard_unit + 1).keys()].map((q) => (
            <option key={q} value={q}>{q}</option>
          ))}
        </select>

        <label>Pickup Time</label>
        <select value={pickupTime} onChange={(e) => setPickupTime(e.target.value)}>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          {/* Add more pickup times as needed */}
        </select>
      </div>

      <div className="reservation-actions">
        <button onClick={() => navigate(-1)}>Cancel</button>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default MakeReservation;
