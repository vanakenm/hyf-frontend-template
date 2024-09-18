import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming react-router-dom for navigation
import { reserved } from '../dataFoodLover'; // Import the reserved object
import './reservedListFunc.css'


const ReservedList = () => {
  const navigate = useNavigate();

  const handleClick = (reservedItem) => {
    // Navigate to ReservedDetailPage and pass reservedItem as state
    navigate('/reserved-detail', { state: reservedItem });
  };

  return (
    <div className="reserved-list">
      <h2>Your open reservations</h2>
      {/* Check if reserved array is not empty */}
      {reserved.length > 0 ? (
        reserved.map((item, index) => (
          <div key={index} className="reserved-item" onClick={() => handleClick(item)}>
            <div className="reserved-item-row">
              <p>{item.name}</p>
              <p>{item.restaurant}</p>
            </div>
            <div className="reserved-item-row">
              <p>{item.status}</p>
            </div>
          </div>
        ))
      ) : (
        <p>You don't have open reservations at the moment...</p>
      )}
    </div>
  );
};

export default ReservedList;
