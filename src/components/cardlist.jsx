import { Table, Button } from "react-bootstrap";
import "./flashcard.css";
import data from "../data.js";
import { useState } from "react";

function Cardlist() {
  return (
    <div className="cardTable">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>English</th>
            <th>Russian</th>
            <th>Transcription</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <Word key={item.id} {...item} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function Word({ id, english, russian, transcription }) {
  const [isEditBtn, changeEditBtn] = useState(false);

  const [word, setWord] = useState({ english, russian, transcription });

  function onClick() {
    changeEditBtn(true);
  }

  function onChangeEnglish(evt) {
    setWord({
      english: evt.target.value,
      russian: word.russian,
      transcription: word.transcription,
    });
  }

  function onChangeRussian(evt) {
    setWord({
      english: word.english,
      russian: evt.target.value,
      transcription: word.transcription,
    });
  }

  function onChangeTranscription(evt) {
    setWord({
      english: word.english,
      russian: word.russian,
      transcription: evt.target.value,
    });
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
          <input value={word.english} onChange={onChangeEnglish} />
        </td>
        <td>
          <input value={word.russian} onChange={onChangeRussian} />
        </td>
        <td>
          <input value={word.transcription} onChange={onChangeTranscription} />
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

export default Cardlist;
