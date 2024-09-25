import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Re-added to handle navigation to the details page
import './reservationListPage.css';
import reservationApi from '../../api/reservations.js';  // Your API handler

const ReservationListPage = () => {
  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]);

  const params = {
    startDate: "2024-09-14",
    endDate: "2024-09-14",
  };

  const handleUserReservations = async () => {
    try {
      const res = await reservationApi.getUser(1, params);
      const data = await res.json();
      console.log(data);
      setReservations(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleUserReservations();
  }, []);

  // Separate reservations into "Open" (Reserved, Ready for pickup) and "Archive" (Delivered)
  const openReservations = reservations.filter(
    (reservation) => reservation.status !== 'Delivered'
  );
  const archiveReservations = reservations.filter(
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
              <span>{reservation.provider_name}</span> - <span>{reservation.type}</span>
            </div>
            <div className="reservation-row">
              <span>{reservation.status}</span>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>You don't have open reservations at the moment...</p>
          <button onClick={() => navigate('/offerslover')}>Check out to day's offers</button>
        </div>
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
              <span>{reservation.provider_name}</span> - <span>{reservation.type}</span>
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
