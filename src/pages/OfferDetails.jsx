import { useEffect, useState } from "react";
import api from "../api/offers";
import { useParams } from "react-router";

const OfferDetails = () => {
  const [providerOffers, setProviderOffers] = useState([]);
  const provider_id = useParams();

  const fetchOfferDetails = async (id) => {
    try {
      const response = await api.get(`/offers/${id}`);
      const offer = await response.json();
      console.log(offer);
      setProviderOffers(offer);
    } catch (error) {
      return `${error.message} - There is an error fetching provider offers`;
    }
  };

  useEffect(() => {
    if (provider_id) {
      fetchOfferDetails(provider_id);
    }
  }, [provider_id]);

  return (
    <div>
      <p> Offer name </p>
      {providerOffers.map((offer) => (
        <p key={offer.provider_id}>
          {" "}
          {new Date(offer.week_start).toLocaleDateString()}{" "}
        </p>
      ))}
    </div>
  );
};

export default OfferDetails;
