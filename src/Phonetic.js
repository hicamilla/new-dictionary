import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <h2>{props.phonetic.text}</h2>
      <br />
      <a href={props.phonetic.audio} target="_blank">
        Listen
      </a>
      
    </div>
  )
}