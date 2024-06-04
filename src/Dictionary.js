import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos"
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = "927adff4309ccc33tb7fd3o104741c05";
    let apiUrl = "https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}";
    axios.get(apiUrl).then(handleResponse);

    let imageApiKey = "07944d6694a03tbbadbf6e7o423a9f8f";
    let imagesApiUrl = "https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}";
    axios.get(imagesApiUrl).then(handleImageResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
         <h1>Dictionary</h1>
        <section>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
          </form>
          <div className="hint">
            i.e., cynical, ambiguous, apathetic... 
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    )
  }
}