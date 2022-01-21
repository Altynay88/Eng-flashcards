import { Card, Button } from "react-bootstrap";
import data from "../data";
import "./flashcard.css";
import { useState } from "react";

function TrainingCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function onNext() {
    setCurrentIndex(currentIndex + 1);
  }

  function onPrevious() {
    setCurrentIndex(currentIndex - 1);
  }

  if (currentIndex === data.length) {
    return <p className="endOfCard">Good job</p>;
  } else {
    return (
      <div className="cardbox">
        {currentIndex > 0 && (
          <Button onClick={onPrevious} className="btnLeft">
            {"<"}
          </Button>
        )}
        <Card className="text-center">
          <Card.Header>{data[currentIndex].english}</Card.Header>
          <Card.Body>
            <Card.Text>{data[currentIndex].transcription}</Card.Text>
            <Button variant="primary">Check</Button>
          </Card.Body>
        </Card>
        {currentIndex + 1} / 24 {data.lenght}
        <Button onClick={onNext} className="btnRight">
          {">"}
        </Button>
      </div>
    );
  }
}

export default TrainingCard;
