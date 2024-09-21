import { useState, useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./global.css";
import reservationApi from "./api/reservations";
import offersApi from "./api/offers";
import ListOfFoods from "./components/Listoffoods/ListOfFoods";
import loginApi from "./api/login";
import boxesApi from "./api/boxes";

function App() {
  const [offers, setOffers] = useState([]);
    const [result, setResult] = useState(null);

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
            setResult(data);

    } catch (error) {
      console.log(error);
    }
  };

  const getReservationsByUser = async () => {
    try {
      const res = await reservationApi.getUser(1, params);
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.log(error);
    }
  };

  const postReservations = async () => {
    const data = {
      user_id: 5,
      provider_id: 1,
      box_id: 1,
      date: "2024-09-14",
      quantity: 2,
    };
    try {
      const res = await reservationApi.post(data);
      const reserve = await res.json();
      setResult(reserve);
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatus = async () => {
    const data = {
      provider_id: 3,
      date: "2024-09-14",
    };
    try {
      const res = await reservationApi.post(data);
      const reserve = await res.json();
      setResult(reserve);
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

  const loginUser = async () => {
    const data = {
      login: "imask@example.com",
      password: "password123",
    };
    try {
      const res = await loginApi.post(data);
      const reserve = await res.json();
      setResult(reserve);
    } catch (error) {
      console.log(error);
    }
  };

  const addBoxes = async () => {
    const data = {
      provider_id: 3,
      week_start: "2024-10-01",
      type: 1,
      quantity: 5,
      pickup_time: "17:30:00",
    };
    try {
      const res = await boxesApi.put(data);
      const reserve = await res.json();
      setResult(reserve);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <section>
        <div className="title">
          <div className="sub-title">
            <h2 className="text-center">Rescue Food, Fight Waste</h2>
            <h3 className="text-center">Join us and help feed the world </h3>
          </div>
          <Image
            className="title-image"
            src="https://img.freepik.com/free-photo/close-up-volunteers-collecting-food_23-2149182026.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717545600&semt=ais_user"
          />
        </div>

        <Row>
          <div className="queries-btn">
            <button onClick={() => getReservations()} className="btn">
              getReservations by provider
            </button>
            <button onClick={() => getReservationsByUser()} className="btn">
              getReservations by user
            </button>
            <button onClick={() => postReservations()} className="btn">
              postReservations
            </button>
           
            <button onClick={() => loginUser()} className="btn">
              login User
            </button>
            <button onClick={() => addBoxes()} className="btn">
              add boxes
            </button>
            <button onClick={() => changeStatus()} className="btn">
              change status
            </button>
          </div>

          <h1 className="text-center">CareFood</h1>
          <Col>
            <div className="text-center"></div>
          </Col>
        </Row>

        <ListOfFoods offers={offers} />
        {result && (
          <div className="result-section my-4">
            <h4>result:</h4>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </section>
    </Container>
  );
}

export default App;
