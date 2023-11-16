"use client";

import ListGroup from "react-bootstrap/ListGroup";
import Link from "next/link";

export default function MainMenu() {
  return (
    <ListGroup>
      <ListGroup.Item action>
        <Link href="/ui/react-bootstrap">React-Bootstrap</Link>
      </ListGroup.Item>
      <ListGroup.Item>Lorem ipsum dolor sit amet</ListGroup.Item>
      <ListGroup.Item>consectetur adipiscing elit</ListGroup.Item>
      <ListGroup.Item>Vestibulum pharetra lectus</ListGroup.Item>
    </ListGroup>
  );
}