import { Button } from "react-bootstrap";

export default function CustomButton({ text, props }) {
  return (
    <Button
      type="submit"
      size="lg"
      style={{
        borderWidth: "0px",
        backgroundImage:
          "linear-gradient(to right, rgb(137, 87, 255), rgb(0, 143, 255))",
      }}
      {...props}
    >
      {text}
    </Button>
  );
}
