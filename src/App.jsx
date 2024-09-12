import { useState } from "react";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import "./global.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <Container>
      <div className="title">
        <Image
          src="https://img.freepik.com/free-photo/close-up-volunteers-collecting-food_23-2149182026.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717545600&semt=ais_user"
          className="mx-auto d-block"
        />
        <div className="sub-title">
          <h2>Rescue Food, Fight Waste</h2>
          <h3>Join us and help feed the world </h3>
        </div>
      </div>

      <Row>
        <h1 className="text-center">CareFood</h1>
        <Col>
          <div className="text-center"></div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
