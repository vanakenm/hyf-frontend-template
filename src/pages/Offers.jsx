import { useNavigate } from "react-router";
import reservation_icon from "../assets/reservation_icon.png";
import offers_icon from "../assets/offers_icon.png";
import logout_icon from "../assets/logout_icon.png";

const Offers = () => {
  const navigate = useNavigate();

  return (
    <div className="content">
      <div className="title-wrapper">
        <h2 className="heading"> Offers </h2>
        <p> New Offer </p>
      </div>
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

export default Offers;
