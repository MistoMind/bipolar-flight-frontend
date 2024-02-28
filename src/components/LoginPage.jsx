import { Button, Card } from "react-bootstrap";
import { useRef, useState } from "react";
import axios from "axios";

import urls from "../constants/urls";

export default function LoginPage({ userType = "User", setUser, setIsLogged }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const form = useRef(null);

  let loginEndpoint;

  if (userType === "User") {
    loginEndpoint = urls.USER_LOGIN_URL;
  } else if (userType === "Admin") {
    loginEndpoint = urls.ADMIN_LOGIN_URL;
  }

  function handleLogin(e) {
    e.preventDefault();

    const data = new FormData(form.current);

    axios
      .post(loginEndpoint, data)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response["data"]["access_token"]);
      })
      .catch((error) => {
        console.error(error);
      });

    const token = "Bearer " + localStorage.getItem("token");

    console.log("Token : " + token);

    axios
      .get(urls.GET_CURRENT_USER, { headers: { Authorization: token } })
      .then((response) => {
        setIsLogged(true);
        setUser(response["data"]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <Card
      style={{
        margin: "5rem 5rem",
        borderRadius: "50px 50px 0px 0px",
        width: "20rem",
        backdropFilter: "blur(1px)",
        background: "rgba(180, 180, 180, 0.05)",
      }}
    >
      <Card.Header
        style={{
          color: "white",
          textAlign: "center",
          fontFamily: "Monospace",
          fontSize: "2em",
          borderRadius: "50px 50px 0px 0px",
          backgroundImage:
            "linear-gradient(to right, rgb(137, 87, 255), rgb(0, 143, 255))",
        }}
      >
        {userType} Login
      </Card.Header>
      <Card.Body
        style={{
          margin: "0.5rem",
          borderWidth: "4px",
          borderStyle: "solid",
          borderImage:
            "linear-gradient(rgb(137, 87, 255), rgb(0, 143, 255)) 30",
        }}
      >
        <form ref={form} onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label text-white">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="username"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="text-center">
            <Button
              type="submit"
              text="Login"
              size="lg"
              style={{
                borderWidth: "0px",
                backgroundImage:
                  "linear-gradient(to right, rgb(137, 87, 255), rgb(0, 143, 255))",
              }}
            >
              Login
            </Button>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
}
