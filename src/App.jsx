import { useState, useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./global.css";
import reservationApi from "./api/reservations";
import offersApi from "./api/offers";
import { useNavigate } from "react-router-dom";

function App() {
  const [offers, setOffers] = useState([]);
  const navigate = useNavigate();
  const params = {
    startDate: "2024-09-14",
    endDate: "2024-09-14",
  };
  useEffect(() => {
    getOffers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getReservations = async () => {
    try {
      const res = await reservationApi.get(3, params);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const postReservations = async () => {
    const data = {
      user_id: 5,
      provider_id: 1,
      box_id: 1,
      reservation_date: "2024-09-14",
      quantity: 2,
    };
    try {
      const res = await reservationApi.post(data);
      const reserve = await res.json();
      console.log(reserve);
    } catch (error) {
      console.log(error);
    }
  };

  const getOffers = async () => {
    try {
      const res = await offersApi.get(params);
      const offer = await res.json();
      setOffers(offer);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(offers);
  return (
    <Container>
      <div className="title">
        <Image className="title-image"
          src="https://img.freepik.com/free-photo/close-up-volunteers-collecting-food_23-2149182026.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717545600&semt=ais_user"
          className="mx-auto d-block"
        />
        <div className="sub-title">
          <h2>Rescue Food, Fight Waste</h2>
          <h3>Join us and help feed the world </h3>
        </div>
      </div>

      <Row>
        <div className="queries-btn">
          <button onClick={() => postReservations()} className="btn">
            postReservations
          </button>
          <button onClick={() => getReservations()} className="btn">
            getReservations
          </button>
          <button onClick={() => getOffers()} className="btn">
            Get Offers
          </button>
        </div>
        <ul>
          {offers.map((item, index) => (
            <li key={index}>{item.pickup_time}</li>
          ))}
        </ul>
        <h1 className="text-center">CareFood</h1>
        <Col>
          <div className="text-center"></div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
