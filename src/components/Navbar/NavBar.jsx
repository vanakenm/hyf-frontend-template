import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom"; 
import './navbar.css'

export default function Navigation() {
  const location = useLocation(); 

  const isHomePage = location.pathname === "/";

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="brand-red">
          Food Rescue
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="btn" style={{ marginRight: "1rem" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/recipes" className="btn">
              Food Items
            </Nav.Link>

            {isHomePage && (
              <div className="nav-buttons">
                <Nav.Link
                  href="/login"
                  className="btn"
                  style={{ marginRight: "1rem" }}
                >
                  Login
                </Nav.Link>
                <Nav.Link href="/register" className="btn">
                  Register
                </Nav.Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
