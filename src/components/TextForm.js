import React, { useState } from "react";

export default function TextForm(props) {
  
  const handleUpclick = () => {
    let newText = text.toUpperCase(text);
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };

  const handleloclick = () => {
    let newText = text.toLowerCase(text);
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  };

  const handleReverseclick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("String reversed", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const clearText = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#4c527b" }}
      >
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#4c527b",
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>
          Convert to uppper case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleloclick}>
          Convert to Lower case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleReverseclick}>
          Reverse a string
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>
          Remove extra Space
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={clearText}>
          Clear text
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
          color: props.mode === "dark" ? "white" : "#4c527b",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
