import { Table } from "react-bootstrap";
import React from "react";
import "./flashcard.css";
import data from "../data.js";
import Word from "./Word";

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

export default Cardlist;
