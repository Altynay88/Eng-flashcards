import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./flashcard.css";

export default function Cards({ english, russian, transcription, id }) {
  return (
    <>
      <Card className="small-card">
        <Card.Header>{english}</Card.Header>
        <Card.Body>
          <Card.Text>{transcription}</Card.Text>
          <Button variant="primary">Check</Button>
        </Card.Body>
      </Card>
    </>
  );
}
