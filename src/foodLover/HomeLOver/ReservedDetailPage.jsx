import React from 'react';
import { useLocation } from 'react-router-dom';
import './reservedDetailPage.css'

const ReservedDetailPage = () => {
  const location = useLocation();
  const reservedItemDetail = location.state; // Get passed reservation details


  const renderStatusSection = () => {
    if (reservedItemDetail.status === 'Reserved') {
      return (
        <>
          <h2>Reserved</h2>
          <p>The restaurant will update the status when your reservation is ready for pickup.</p>
        </>
      );
    } else if (reservedItemDetail.status === 'Ready for pickup') {
      return (
        <>
          <h2>Ready for pickup</h2>
          <p>Reservation is ready for pickup! Head to:</p>
          <h2>{reservedItemDetail.restaurant}</h2>
          <h4>{reservedItemDetail.address}</h4>
          <p>The restaurant expects you at:</p>
          <h4>{reservedItemDetail.pickuptime}</h4>
        </>
      );
    } else if (reservedItemDetail.status === 'Delivered') {
      return (
        <>
          <h2>Delivered</h2>
          <p>Your reservation has been delivered. Enjoy your food! Hope to see you again next time.</p>
        </>
      );
    }
  };

  return (
    <div className="reserved-detail">
      <h1>Your reservation for {reservedItemDetail.name}</h1>
      <h2>by {reservedItemDetail.restaurant}</h2>
      <p>{reservedItemDetail.description}</p>
      <div className="status-section">
        {renderStatusSection()}
      </div>
    </div>
  );
};

export default ReservedDetailPage;
