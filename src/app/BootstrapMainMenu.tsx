import Button from "react-bootstrap/Button";
import { UI, useUI } from "./UiContext";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Container, ListGroup, Row } from "react-bootstrap";
import Link from "next/link";

export default function BootstrapMainMenu() {
  const { ui, setContextUI } = useUI();

  const radios = [
    { name: "Bootstrap", value: "bootstrap" },
    { name: "Material UI", value: "mui" },
    { name: "Ant", value: "ant" },
  ];
  return (
    <Container>
      <Row>Current UI library: {ui}</Row>
      <Row>
        {" "}
        <ButtonGroup className="mb-2">
          {radios.map((radio, idx) => (
            <Button
              key={idx}
              id={`radio-${idx}`}
              variant="primary"
              name="radio"
              value={radio.value}
              active={ui === radio.value}
              onClick={() => {
                setContextUI(radio.value as UI);
              }}
            >
              {radio.name}
            </Button>
          ))}
        </ButtonGroup>
      </Row>

      <Row>
        <ListGroup>
          <ListGroup.Item action>
            <Link href="/docker">Docker</Link>
          </ListGroup.Item>
          <ListGroup.Item action>
            <Link href="/ui">UI</Link>
          </ListGroup.Item>
          <ListGroup.Item action>
            <Link href="/state">State Management</Link>
          </ListGroup.Item>
          <ListGroup.Item action>
            <Link href="/authentication">Authentication</Link>
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  );
}
