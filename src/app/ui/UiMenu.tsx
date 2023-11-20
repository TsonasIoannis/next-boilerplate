"use client";

import ListGroup from "react-bootstrap/ListGroup";
import Link from "next/link";

export default function MainMenu() {
  return (
    <ListGroup>
      <ListGroup.Item action>
        <Link href="/ui/react-bootstrap">React-Bootstrap</Link>
      </ListGroup.Item>
      <ListGroup.Item><Link href="/ui/mui">MUI</Link></ListGroup.Item>
      <ListGroup.Item><Link href="/ui/ant">Ant</Link></ListGroup.Item>
    </ListGroup>
  );
}