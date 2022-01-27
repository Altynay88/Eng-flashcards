import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "./flashcard.css";

export default function Cards({ english, russian, transcription, id }) {
  const [isFront, setIsFront] = useState(true);

  function onClick() {
    setIsFront(!isFront);
  }

  useEffect(() => {
    setIsFront(true);
  }, [id]);

  return (
    <>
      <Card className="small-card">
        <Card.Header>{english}</Card.Header>
        <Card.Body>
          <Card.Text>{transcription}</Card.Text>
          {isFront ? (
            <Button onClick={onClick} variant="primary">
              Check
            </Button>
          ) : (
            <div>{russian}</div>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
