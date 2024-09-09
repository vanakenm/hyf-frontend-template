import { Col, Container, Nav, Row } from "react-bootstrap";
import './global.css';
function App() {
  return (
    <Container>
    
      <Row>
        <h1 className="text-center">HYF Frontend template</h1>
        <Col>
          <Nav.Link href="/recipes" className="text-center">
            Recipes List
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
