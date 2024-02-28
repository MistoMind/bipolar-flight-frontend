import { Card } from "react-bootstrap";

export default function SearchPage() {
  return (
    <Card
      style={{
        margin: "5rem 5rem",
        borderRadius: "50px 50px 0px 0px",
        width: "90%",
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
        Search
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
        Empty card body
      </Card.Body>
    </Card>
  );
}
