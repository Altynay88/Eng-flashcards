import { Button } from "react-bootstrap";
import data from "../data";
import "./flashcard.css";
import { useState } from "react";
import Cards from "./trainingCard";
import Cardpicture from "./welldone.gif";

export default function TrainingCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function onNext() {
    setCurrentIndex(currentIndex + 1);
  }

  function onPrevious() {
    setCurrentIndex(currentIndex - 1);
  }

  if (currentIndex === data.length) {
    return (
      <img src={Cardpicture} className="cardPicture" alt="Great job!"></img>
    );
  } else {
    return (
      <>
        <div className="cardbox">
          {currentIndex > 0 && (
            <Button onClick={onPrevious} className="btnLeft">
              {"<"}
            </Button>
          )}
          <Cards {...data[currentIndex]} />
          <Button onClick={onNext} className="btnRight">
            {">"}
          </Button>
        </div>
        <div className="cardNumber">
          {currentIndex + 1} out of {data.length}
        </div>
      </>
    );
  }
}
