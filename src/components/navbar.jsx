import { Container, Navbar, Nav } from "react-bootstrap";

function Menu({ logo, home, training }) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>{logo} </Navbar.Brand>
          <Nav.Item>
            <Nav.Link>{home}</Nav.Link>
          </Nav.Item>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Nav.Item>
              <Nav.Link className="trainingNav"> {training}</Nav.Link>
            </Nav.Item>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
