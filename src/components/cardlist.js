import { Table, Button } from "react-bootstrap";
import "./flashcard.css";
import data from "./data.js";

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

function Word({ id, english, russian, transcription, isEditBtn }) {
  return (
    <tr>
      <td>{isEditBtn ? <input defaultValue={english} /> : english}</td>
      <td>{isEditBtn ? <input defaultValue={russian} /> : russian}</td>
      <td>
        {isEditBtn ? <input defaultValue={transcription} /> : transcription}
      </td>
      <td>
        {isEditBtn ? (
          <Button variant="success" className="successBtn">
            Save
          </Button>
        ) : null}
        {isEditBtn ? null : (
          <Button variant="primary" className="primaryBtn">
            Edit
          </Button>
        )}
        {isEditBtn ? (
          <Button variant="danger">Cancel</Button>
        ) : (
          <Button variant="danger">Delete</Button>
        )}
      </td>
    </tr>
  );
}

export default Cardlist;
