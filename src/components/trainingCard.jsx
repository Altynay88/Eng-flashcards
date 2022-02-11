import { useEffect, useRef } from "react";
import { Card, Button } from "react-bootstrap";
import "./flashcard.css";

export default function Cards({
  english,
  russian,
  transcription,
  addCheckedWords,
  isPressed,
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  });

  const onClick = () => {
    addCheckedWords();
  };

  return (
    <Card className="small-card">
      <Card.Header>{english}</Card.Header>
      <Card.Body>
        <Card.Text>{transcription}</Card.Text>
        {isPressed ? (
          <div>{russian}</div>
        ) : (
          <Button onClick={onClick} ref={ref} variant="primary">
            {" "}
            Check
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
