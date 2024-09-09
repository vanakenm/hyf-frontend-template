import { useState } from "react";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import './global.css';
import { useNavigate } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      navigate("/recipes");
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <Container>
      <Image
        src="https://img.freepik.com/free-photo/close-up-volunteers-collecting-food_23-2149182026.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717545600&semt=ais_user"
        className="mx-auto d-block"
      />
      <Row>
        <h1 className="text-center">CareFood</h1>
        <Col>
          <div className="text-center">
            <label>
              username:
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
              ></input>
            </label>
            <label>
              password:
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
              ></input>
            </label>
            <button onClick={handleLogin} >
              Login
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
