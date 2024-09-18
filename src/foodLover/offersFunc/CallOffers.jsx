import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OffersListFunction from './OffersListFunction';
import OffersDetailListFunction from './OffersDetailListFunction';
import MakeReservation from './MakeReservation';
import ReservationListPage from '../reservationpart/ReservationListPage';

function CallOffers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OffersListFunction />} />
        <Route path="/offers-detail" element={<OffersDetailListFunction />} />
        <Route path="/make-reservation" element={<MakeReservation />} />
        <Route path="/reservation-list" element={<ReservationListPage />} />  {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default CallOffers;
