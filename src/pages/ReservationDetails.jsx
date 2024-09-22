import { useNavigate, useLocation, useParams } from "react-router";
import back_icon from "../assets/back_icon.png";
import { useEffect, useState } from "react";
import api from "../api/reservations";

const ReservationDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [reservations, setReservations] = useState([]);

  const { id } = useParams();

  const handleReservationDetails = async () => {
    try {
      const response = await api.get(`/reservations/provider/${id}`);
      const data = await response.json();
      console.log(data);
      setReservations(data);
    } catch (error) {
      return `${error.message} - There is an error fetching the reservation details`;
    }
  };

  const handleButtonText = () => {
    if (reservations.status === "active") {
      return <button className="status"> Ready for pickup </button>;
    } else if (reservations.status === "ready") {
      return <button className="status"> Delivered </button>;
    } else {
      return null;
    }
  };

  useEffect(() => {
    console.log(state);
    handleReservationDetails();
  }, []);

  return (
    <div>
      <img
        onClick={() => navigate("/reservations")}
        className="back-icon"
        src={back_icon}
      />
      <div>
        <h2 className="heading"> Reservation for {reservations.type} </h2>
        <p className="date"> {reservations.date} </p>
        <p className="description"> {reservations.description} </p>
        <p className="food-lover">
          {" "}
          Reserved by: <strong>{reservations.user_name}</strong>{" "}
        </p>
      </div>
      <div className="details">
        <div>
          <p>
            {" "}
            <strong>{reservations.units}</strong>{" "}
          </p>
          <p> units </p>
        </div>
        <div>
          <p>
            {" "}
            <strong>{reservations.status}</strong>{" "}
          </p>
          <p> status </p>
        </div>
      </div>
      <div>{handleButtonText()}</div>
    </div>
  );
};

export default ReservationDetails;
