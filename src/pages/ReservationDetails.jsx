import { useNavigate, useParams } from "react-router";
import back_icon from "../assets/back_icon.png";

const ReservationDetails = () => {
  const navigate = useNavigate();

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

  const { id } = useParams();
  const reservation = dummyReservations.find(
    (reservation) => reservation.id === Number(id)
  );

  const handleButtonText = () => {
    if (reservation.status === "Reserved") {
      return <button className="status"> Ready for pickup </button>;
    } else if (reservation.status === "Ready for pickup") {
      return <button className="status"> Delivered </button>;
    } else {
      return null;
    }
  };

  return (
    <div>
      <img
        onClick={() => navigate("/reservations")}
        className="back-icon"
        src={back_icon}
      />
      <div>
        <h2 className="heading"> Reservation for {reservation.offerName} </h2>
        <p className="date"> {reservation.date} </p>
        <p className="description"> {reservation.description} </p>
        <p className="food-lover">
          {" "}
          Reserved by: <strong>{reservation.foodLover}</strong>{" "}
        </p>
      </div>
      <div className="details">
        <div>
          <p>
            {" "}
            <strong>{reservation.units}</strong>{" "}
          </p>
          <p> units </p>
        </div>
        <div>
          <p>
            {" "}
            <strong>{reservation.status}</strong>{" "}
          </p>
          <p> status </p>
        </div>
      </div>
      <div>{handleButtonText()}</div>
    </div>
  );
};

export default ReservationDetails;
