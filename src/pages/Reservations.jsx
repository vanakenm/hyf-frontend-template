import { useEffect, useState } from "react";
import "../App.css";
import "../global.css";
import { useNavigate } from "react-router";
import forward_icon from "../assets/forward.png";
import reservation_icon from "../assets/reservation_icon.png";
import offers_icon from "../assets/offers_icon.png";
import logout_icon from "../assets/logout_icon.png";

const Reservations = () => {
  const dummyReservations = [
    {
      id: 1,
      description:
        "Savour the perfect balance of crispy, golden-brown skin and tender, succulent meat in our homemade fried chicken. Every bite is a delicious adventure.",
      date: "Sept 16 2024",
      time: "12:15",
      offerName: "Fried chicken",
      units: 10,
      status: "Reserved",
      foodLover: "Mark Adams",
    },
    {
      id: 2,
      description:
        "Our pasta is made daily with the freshest ingredients, ensuring a delicious and satisfying meal. Choose from a variety of classic and innovative dishes.",
      date: "Sept 16 2024",
      time: "14:30",
      offerName: "Pasta",
      units: 5,
      status: "Ready for pickup",
      foodLover: "Jane Anderson",
    },
    {
      id: 3,
      description:
        "Our rice is carefully selected and prepared to ensure a tender and flavorful accompaniment to any meal.",
      date: "Sept 15 2024",
      time: "13:00",
      offerName: "Rice",
      units: 7,
      status: "Delivered",
      foodLover: "Tony Miguel",
    },
  ];

  const [reservations, setReservations] = useState(dummyReservations);

  const navigate = useNavigate();

  // Counters for the different status
  const [reservedCount, setReservedCount] = useState(0);
  const [readyCount, setReadyCount] = useState(0);
  const [deliveredCount, setDeliveredCount] = useState(0);

  const groupedData = dummyReservations.reduce((groups, reservations) => {
    const date = reservations.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(reservations);
    return groups;
  }, {});

  const groupedReservations = Object.keys(groupedData).map((date) => {
    return {
      date,
      reservations: groupedData[date],
    };
  });

  useEffect(() => {
    const reserved = reservations.filter(
      (item) => item.status === "Reserved"
    ).length;
    const ready = reservations.filter(
      (item) => item.status === "Ready for pickup"
    ).length;
    const delivered = reservations.filter(
      (item) => item.status === "Delivered"
    ).length;

    setReservedCount(reserved);
    setReadyCount(ready);
    setDeliveredCount(delivered);
  }, [reservations]);

  return (
    <div>
      <h2 className="heading"> Reservations </h2>
      <div className="container">
        <div>
          <p className="count"> {reservedCount} </p>
          <h3> reserved </h3>
        </div>
        <div>
          <p className="count"> {readyCount} </p>
          <h3> ready for pickup </h3>
        </div>
        <div>
          <p className="count"> {deliveredCount} </p>
          <h3> delivered </h3>
        </div>
      </div>
      {groupedReservations.map((item, index) => (
        <div className="list" key={index}>
          <h4> {item.date} </h4>
          <ul>
            {item.reservations.map((reservation, index) => (
              <li
                onClick={() => {
                  navigate(`/reservations/${reservation.id}`);
                }}
                className="list-item"
                id={`reservation-${reservation.id}`}
                key={index}
              >
                <div>
                  {" "}
                  <strong> {reservation.id} </strong>{" "}
                </div>
                <div>
                  <div>
                    {" "}
                    <strong> {reservation.offerName} </strong>{" "}
                  </div>
                  <div>
                    {" "}
                    {reservation.time} - {reservation.status}{" "}
                  </div>
                  <div> {reservation.foodLover} </div>
                </div>
                <div>
                  <img className="icon" src={forward_icon} />
                </div>
              </li>
            ))}
          </ul>
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

export default Reservations;
