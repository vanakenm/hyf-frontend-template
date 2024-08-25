import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Row>
        <a href="https://www.hackyourfuturebelgium.be/" target="_blank">
          <img
            src="https://static.wixstatic.com/media/2524ce_cb266239a431485aa92c419e50505f7a~mv2.png"
            alt="HYF Logo"
          />
        </a>
      </Row>
      <Row>
        <h1>HYF Frontend template</h1>

        <Col>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
