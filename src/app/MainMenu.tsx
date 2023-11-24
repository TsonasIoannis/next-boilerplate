"use client";

import ListGroup from "react-bootstrap/ListGroup";
import Link from "next/link";

export default function MainMenu() {
  return (
    <ListGroup>
      <ListGroup.Item action>
        <Link href="/docker">Docker</Link>
      </ListGroup.Item>
      <ListGroup.Item><Link href="/ui">UI</Link></ListGroup.Item>
      <ListGroup.Item><Link href="/state">State Management</Link></ListGroup.Item>
      <ListGroup.Item>Vestibulum pharetra lectus</ListGroup.Item>
    </ListGroup>
  );
}
