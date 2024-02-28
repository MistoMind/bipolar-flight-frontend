import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

import pages from "../constants/pages";

function NavBar({ user, isLogged, setIsLogged, setCurrentPage }) {
  function handleLogout() {
    localStorage.removeItem("token");
    setIsLogged(false);
  }

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
                  {user.name}
                </Badge>
              </Navbar.Text>
              <Button
                style={{ margin: "0rem 1rem" }}
                variant="danger"
                type="button"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}
          {!isLogged && (
            <Button
              type="submit"
              text="Login"
              style={{
                borderWidth: "0px",
                backgroundImage:
                  "linear-gradient(rgb(0, 169, 0), rgb(0, 255, 0))",
              }}
              onClick={() => setCurrentPage(pages.LOGIN)}
            >
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
