import { Button } from "react-bootstrap";
import React from "react";
import "./flashcard.css";
import { useState } from "react";
import Input from "./Input";

function Word({ english, russian, transcription }) {
  const [isEditBtn, changeEditBtn] = useState(false);

  const [word, setWord] = useState({ english, russian, transcription });

  function onClick() {
    changeEditBtn(true);
  }

  function onSave() {
    changeEditBtn(false);
  }

  function onCancel(evt) {
    setWord({
      english,
      russian,
      transcription,
    });
    changeEditBtn(false);
  }

  if (!isEditBtn) {
    return (
      <tr>
        <td>{word.english}</td>
        <td>{word.russian}</td>
        <td>{word.transcription}</td>
        <td>
          <Button onClick={onClick} variant="primary" className="primaryBtn">
            Edit
          </Button>
          <Button onClick={onCancel} variant="danger">
            Cancel
          </Button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>
          <Input
            value={word.english}
            regexEnglish={new RegExp(/^[a-z\s]+$/i)}
          />
        </td>
        <td>
          <Input
            value={word.russian}
            regexRussian={new RegExp(/^[а-я\s]+$/i)}
          />
        </td>
        <td>
          <Input
            value={word.transcription}
            regexTranscription={new RegExp(/^[0-9\s]+$/)}
          />
        </td>
        <td>
          <Button onClick={onSave} variant="success" className="successBtn">
            Save
          </Button>
        </td>
      </tr>
    );
  }
}

export default Word;
