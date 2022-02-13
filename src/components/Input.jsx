import { useState, useEffect } from "react";
import "./flashcard.css";

function Input(props) {
  const [value, setValue] = useState(props.value);
  const [error, setError] = useState("");

  function onSave(evt) {
    setValue(evt.target.value);
  }

  function onChange(evt) {
    validate(evt.target.value);
  }

  function validate(inputValue) {
    setValue(inputValue);

    if (inputValue === "") {
      setError("Cannot be empty");
    } else if (props.regexEnglish && !props.regexEnglish.test(inputValue)) {
      setError("Only English letters allowed");
    } else if (props.regexRussian && !props.regexRussian.test(inputValue)) {
      setError("Only Russian letters allowed");
    } else if (
      props.regexTranscription &&
      props.regexTranscription.test(inputValue)
    ) {
      setError("Only letters allowed");
    } else {
      setError("");
    }
  }

  useEffect(() => {
    validate(value);
  }, []);

  let className = "";
  if (error) {
    className += " error";
  }

  return (
    <>
      <p className={className}>
        <div className="errorInput">{error}</div>
        <input value={value} onChange={onChange} onClick={onSave} />
      </p>
    </>
  );
}

export default Input;
