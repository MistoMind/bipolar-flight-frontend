import { useState } from "react";
import { Container } from "react-bootstrap";

import LoginPage from "./components/LoginPage";
import NavBar from "./components/NavBar";
import pages from "./constants/pages";
import SearchPage from "./components/SearchPage";
import MyBookingsPage from "./components/MyBookingsPage";

function App() {
  const [userName, setUserName] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [currentPage, setCurrentPage] = useState(pages.LOGIN);

  let currentComponent;

  if (currentPage === pages.LOGIN) {
    currentComponent = (
      <LoginPage
        setIsLogged={(status) => setIsLogged(status)}
        setUserName={(name) => setUserName(name)}
      />
    );
  } else if (currentPage === pages.SEARCH) {
    currentComponent = <SearchPage />;
  } else if (currentPage === pages.MY_BOOKINGS) {
    currentComponent = <MyBookingsPage />;
  }

  return (
    <>
      <NavBar
        userName={userName}
        isLogged={isLogged}
        setIsLogged={(status) => setIsLogged(status)}
        setCurrentPage={(currPage) => setCurrentPage(currPage)}
      />
      <Container
        fluid
        style={{
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: "0%",
          alignItems: "center",
        }}
      >
        {currentComponent}
      </Container>
    </>
  );
}

export default App;
