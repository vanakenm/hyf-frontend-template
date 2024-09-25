import React from 'react';
import { useLocation } from 'react-router-dom';
import './reservationDetailListPage.css'

const ReservationDetailPage = () => {
  const location = useLocation();
  const reservedItemDetail = location.state.reservation; // Get passed reservation details

  const renderStatusSection = () => {
    if (reservedItemDetail.status === 'Reserved') {
      return (
        <>
          <h2>Reserved</h2>
          <p>The restaurant will update the status when your reservation is ready for pickup.</p>
        </>
      );
    } else if (reservedItemDetail.status === 'Ready for Pickup') {
      return (
        <>
          <h2>Ready for Pickup</h2>
          <p>Reservation is ready for pickup! Head to:</p>
          <h2>{reservedItemDetail.provider_name}</h2>
          <h4>{reservedItemDetail.address}</h4>
          <p>The restaurant expects you at:</p>
          <h4>{new Date(reservedItemDetail.reservation_date).toLocaleString()}</h4>
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
      <h1>Your reservation for {reservedItemDetail.provider_name}</h1>
      <h2>Type: {reservedItemDetail.type}</h2>
      <p>Quantity: {reservedItemDetail.quantity}</p>
      <div className="status-section">
        {renderStatusSection()}
      </div>
    </div>
  );
};

export default ReservationDetailPage;
