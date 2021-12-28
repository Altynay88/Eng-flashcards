import { Container, Navbar, Nav } from "react-bootstrap";
import "./flashcard.css";

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Flashcards</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#">Log in</Nav.Link>
            <Nav.Link href="#">Sign up</Nav.Link>
          </Nav>
          <Nav.Item>
            <Nav.Link className="trainingNav" href="#">
              Training
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Add a word</Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
