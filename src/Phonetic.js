import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <h2>{props.phonetic.text}</h2>
      <br />
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <br />
      <span>{props.phonetic.text}</span>
    </div>
  );
}