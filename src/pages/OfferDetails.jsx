import { useNavigate, useParams } from "react-router";

const OfferDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return <div>OfferDetails</div>;
};

export default OfferDetails;
