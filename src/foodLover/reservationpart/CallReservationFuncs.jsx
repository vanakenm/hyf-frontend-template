import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReservationListPage from './/ReservationListPage';
import ReservedDetailPage from './ReservationDetailListPage';


function CallReservationFuncs() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReservationListPage />} />
        <Route path="/reserved-detail" element={<ReservedDetailPage />} />
      </Routes>
    </Router>
  );
}

export default CallReservationFuncs;
