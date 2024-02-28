import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

import pages from "../constants/pages";

function NavBar({ userName, isLogged, setIsLogged, setCurrentPage }) {
  return (
    <Navbar style={{ backgroundColor: "#4672ff" }} data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Bipolar Flight</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setCurrentPage(pages.SEARCH)}>
              Search
            </Nav.Link>
            <Nav.Link onClick={() => setCurrentPage(pages.MY_BOOKINGS)}>
              My Bookings
            </Nav.Link>
          </Nav>
          {isLogged && (
            <>
              <Navbar.Text>
                Signed in as:{" "}
                <Badge className="text-black" bg="light">
                  {" "}
                  {userName}
                </Badge>
              </Navbar.Text>
              <Button
                style={{ margin: "0rem 1rem" }}
                variant="danger"
                type="button"
                onClick={() => setIsLogged(false)}
              >
                Logout
              </Button>
            </>
          )}
          {!isLogged && <Navbar.Text>Not Logged In</Navbar.Text>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
