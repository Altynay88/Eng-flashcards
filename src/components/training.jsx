import { Button } from "react-bootstrap";
import "./flashcard.css";
import { useState } from "react";
import Cards from "./trainingCard";
import data from "../data.js";
import Cardpicture from "./welldone.gif";

export default function TrainingCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [words, setWords] = useState(data);

  function onNext() {
    setCurrentIndex(currentIndex + 1);
  }

  function onPrevious() {
    setCurrentIndex(currentIndex - 1);
  }

  const [checkedWords, setCheckedWords] = useState(0);

  const addCheckedWords = () => {
    setCheckedWords((prevCheckedWords) => prevCheckedWords + 1);

    const newWords = [...words];
    newWords[currentIndex].isPressed = true;
    setWords(newWords);
  };

  if (currentIndex === words.length) {
    return (
      <img src={Cardpicture} className="cardPicture" alt="Great job!"></img>
    );
  } else {
    return (
      <>
        <h5 className="checkedWords">You learned {checkedWords} words!</h5>
        <div className="cardbox">
          {currentIndex > 0 && (
            <Button onClick={onPrevious} className="btnLeft">
              {"<"}
            </Button>
          )}
          <Cards {...data[currentIndex]} addCheckedWords={addCheckedWords} />
          <Button onClick={onNext} className="btnRight">
            {">"}
          </Button>
        </div>
        <div className="cardNumber">
          {currentIndex + 1} out of {words.length}
        </div>
      </>
    );
  }
}
