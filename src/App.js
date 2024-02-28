import { Container } from "react-bootstrap";
import { useState } from "react";

import NavBar from "./components/NavBar";
import LoginCard from "./components/LoginCard";
import urls from "./constants/urls";

function App() {
  const [userName, setUserName] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <NavBar
        userName={userName}
        isLogged={isLogged}
        setIsLogged={(status) => setIsLogged(status)}
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
        <LoginCard
          loginEndpoint={urls.USER_LOGIN_URL}
          setIsLogged={(status) => setIsLogged(status)}
          setUserName={(name) => setUserName(name)}
        />
      </Container>
    </>
  );
}

export default App;
