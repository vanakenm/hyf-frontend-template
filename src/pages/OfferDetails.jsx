import { useEffect, useState } from "react";
import "../App.css";
import api from "../api/offers";
import { useNavigate, useParams } from "react-router";
import back_icon from "../assets/back_icon.png";
import reservation_icon from "../assets/reservation_icon.png";
import offers_icon from "../assets/offers_icon.png";
import logout_icon from "../assets/logout_icon.png";

const OfferDetails = () => {
  const navigate = useNavigate();
  const [providerOffers, setProviderOffers] = useState([]);
  const { id } = useParams();
  const params = {
    startDate: "2024-09-14",
    endDate: "2024-09-14",
  };

  const handleOfferDetails = async () => {
    try {
      const response = await api.get(params);
      const data = await response.json();
      const offer = data.find((o) => o.provider_id.toString() === id);
      if (offer) {
        setProviderOffers([offer]);
      }
    } catch (error) {
      return `${error.message} - There is an error fetching provider offers`;
    }
  };

  useEffect(() => {
    handleOfferDetails();
  }, []);

  return (
    <div className="content">
      <div className="title-wrapper">
        <div>
          <img onClick={() => navigate("/offers")} src={back_icon} />
        </div>
        <p> Update </p>
      </div>
      {providerOffers.map((offer, index) => (
        <div className="offers-description" key={index}>
          <div>
            <h2 className="text-uppercase"> Standard </h2>
            <p className="text-sm"> {offer.standard_description} </p>
          </div>
          <div>
            <h2 className="text-uppercase"> Vegan </h2>
            <p className="text-sm"> {offer.vegan_description} </p>
          </div>
          <div>
            <h2 className="text-uppercase"> Diabetic </h2>
            <p className="text-sm"> {offer.diabetic_description} </p>
          </div>
        </div>
      ))}
      <div className="footer">
        <div onClick={() => navigate("/reservations")}>
          <img src={reservation_icon} />
          <p> Reservations </p>
        </div>
        <div onClick={() => navigate("/offers")}>
          <img src={offers_icon} />
          <p> Offers </p>
        </div>
        <div onClick={() => navigate("/")}>
          <img src={logout_icon} />
          <p> Logout </p>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
