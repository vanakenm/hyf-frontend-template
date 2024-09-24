import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import api from "../api/reservations";
import back_icon from "../assets/back_icon.png";
import reservation_icon from "../assets/reservation_icon.png";
import offers_icon from "../assets/offers_icon.png";
import logout_icon from "../assets/logout_icon.png";

const ReservationDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const params = {
    startDate: "2024-09-14",
    endDate: "2024-09-14",
  };
  const [reservations, setReservations] = useState({});

  const handleReservationDetails = async () => {
    try {
      const response = await api.get(3, params);
      const data = await response.json();
      data.map((r) => {
        if (r.id.toString() === id) {
          setReservations(r);
        }
      });
    } catch (error) {
      return `There is an error fetching the reservation details`, error;
    }
  };

  const updateStatus = () => {
    if (reservations.status === "Reserved") {
      setReservations((prev) => ({ ...prev, status: "Ready for Pickup" }));
    } else if (reservations.status === "Ready for Pickup") {
      setReservations((prev) => ({ ...prev, status: "Delivered" }));
    }
  };

  const handleButtonText = () => {
    if (reservations.status === "Reserved") {
      return (
        <button onClick={updateStatus} className="status">
          {" "}
          Ready for pickup{" "}
        </button>
      );
    } else if (reservations.status === "Ready for Pickup") {
      return (
        <button onClick={updateStatus} className="status">
          {" "}
          Delivered{" "}
        </button>
      );
    } else {
      return null;
    }
  };

  useEffect(() => {
    handleReservationDetails();
  }, []);

  return (
    <div className="content">
      <img
        onClick={() => navigate("/reservations")}
        className="back-icon"
        src={back_icon}
      />
      <div>
        <h2 className="heading"> Reservation for {reservations.type} </h2>
        <p className="date">
          {" "}
          Reservation date: {reservations.reservation_date}{" "}
        </p>
        <p className="food-lover">
          {" "}
          Reserved by: <strong>{reservations.user_name}</strong>{" "}
        </p>
      </div>
      <div className="details">
        <div>
          <p>
            {" "}
            <strong>{reservations.quantity}</strong>{" "}
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

export default ReservationDetails;
