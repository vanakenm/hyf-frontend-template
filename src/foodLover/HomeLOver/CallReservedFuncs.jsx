import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReservedList from './ReservedListFunc';
import ReservedDetailPage from './ReservedDetailPage';

function CallReservedFuncs() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReservedList />} />
        <Route path="/reserved-detail" element={<ReservedDetailPage />} />
      </Routes>
    </Router>
  );
}

export default CallReservedFuncs;
