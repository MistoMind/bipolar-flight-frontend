import { Card } from "react-bootstrap";
import CustomButton from "./CustomButton";
import { useRef, useState } from "react";

import urls from "../constants/urls";

export default function LoginPage({
  userType = "User",
  setUserName,
  setIsLogged,
}) {
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

    fetch(loginEndpoint, {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((json_resp) => {
        console.log(json_resp);

        // setUserName(data["name"]);
        // setIsLogged(true);
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
            <CustomButton text="Login" />
          </div>
        </form>
      </Card.Body>
    </Card>
  );
}
