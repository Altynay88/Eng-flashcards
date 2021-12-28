import { Card, Button } from "react-bootstrap";
import "./flashcard.css";

function TrainingCard() {
  return (
    <div className="cardbox">
      <Card className="text-center">
        <Card.Header>cat</Card.Header>
        <Card.Body>
          <Card.Text>[ kot ]</Card.Text>
          <Button variant="primary">Check</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TrainingCard;
