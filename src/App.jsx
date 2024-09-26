import { useState, useEffect } from "react";
import { Container, Image, Row } from "react-bootstrap";
import "./global.css";
import offersApi from "./api/offers";
import ListOfFoods from "./components/Listoffoods/ListOfFoods";

function App() {
  const [offers, setOffers] = useState([]);

  const params = {
    startDate: "2024-09-14",
    endDate: "2024-09-14",
  };
  useEffect(() => {
    getOffers();
     
     const intervalId = setInterval(getOffers, 10000); // 10 seconds

    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getOffers = async () => {
    try {
      const res = await offersApi.get(params);
      const offer = await res.json();
      setOffers(offer);
      console.log(offer);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <section>
        <div className="title">
          <div className="sub-title">
            <h2 className="text-center-title">Rescue Food, Fight Waste</h2>
            <h3 className="text-center-title">Join us and help feed the world </h3>
          </div>
          <Image
            className="title-image"
            src="https://img.freepik.com/free-photo/close-up-volunteers-collecting-food_23-2149182026.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717545600&semt=ais_user"
          />
        </div>

        <Row>
        
          <h1 className="text-center-title">CareFood</h1>
         
        </Row>

        <ListOfFoods offers={offers} />
      </section>
    </Container>
  );
}

export default App;
