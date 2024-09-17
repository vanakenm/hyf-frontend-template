import React from 'react';
import { useNavigate } from 'react-router-dom';
import { reserved } from '../dataFoodLover'; 
import './reservationListPage.css'

const ReservationListPage = () => {
  const navigate = useNavigate();

  // Separate reservations into "Open" and "Archive" (Delivered)
  const openReservations = reserved.filter(
    (reservation) => reservation.status !== 'Delivered'
  );
  const archiveReservations = reserved.filter(
    (reservation) => reservation.status === 'Delivered'
  );

  // Handle navigation to details page and passing reservation data
  const handleClick = (reservation) => {
    navigate('/reservation-detail', { state: { reservation } });
  };

  return (
    <div className="reservation-list">
      {/* Open Reservations Section */}
      <h2>Open Reservations</h2>
      {openReservations.length > 0 ? (
        openReservations.map((reservation, index) => (
          <div
            key={index}
            className="reservation-item"
            onClick={() => handleClick(reservation)}
          >
            <div className="reservation-row">
              <span>{reservation.name}</span> - <span>{reservation.restaurant}</span>
            </div>
            <div className="reservation-row">
              <span>{reservation.status}</span>
            </div>
          </div>
        ))
      ) : (
        <p>You don't have open reservations at the moment...</p>
      )}

      {/* Archive Section */}
      <h2>Archive</h2>
      {archiveReservations.length > 0 ? (
        archiveReservations.map((reservation, index) => (
          <div
            key={index}
            className="reservation-item"
            onClick={() => handleClick(reservation)}
          >
            <div className="reservation-row">
              <span>{reservation.name}</span> - <span>{reservation.restaurant}</span>
            </div>
            <div className="reservation-row">
              <span>{reservation.status}</span>
            </div>
          </div>
        ))
      ) : (
        <p>No archived reservations.</p>
      )}
    </div>
  );
};

export default ReservationListPage;
