import { useLocation, useNavigate } from 'react-router-dom';
import './offersDetailListFunction.css';

const OffersDetailListFunction = () => {
  const { state: offer } = useLocation();  // Get the offer passed through state
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/make-reservation', { state: offer });  // Navigate to the reservation page
  };

  return (
    <div className="offer-detail">
      <h1>{offer.provider_name}</h1>
      <h4>{offer.date}</h4>
      <p>Standard Units: {offer.standard_unit}</p>
      <p>Vegan Units: {offer.vegan_unit}</p>
      <p>Diabetic Units: {offer.diabetic_unit}</p>
      <p>{offer.standard_description}</p>
      <p>{offer.vegan_description}</p>
      <p>{offer.diabetic_description}</p>

      <button onClick={handleReserveClick}>I like this! Reserve</button>
    </div>
  );
};

export default OffersDetailListFunction;
