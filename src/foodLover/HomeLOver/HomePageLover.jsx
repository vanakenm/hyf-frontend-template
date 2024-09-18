// src/pages/HomePageLover.jsx
import React from 'react';
import OfferTotal from './OfferTotalFunc.jsx';
import ReservedList from './ReservedListFunc.jsx';

const HomePageLover = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between',flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>
        <OfferTotal />
      </div>
      <div style={{ flex: 1 }}>
        <ReservedList />
      </div>
    </div>
  );
};

export default HomePageLover;
