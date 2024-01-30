import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
  const handleUPClick=()=>{
    console.log("button was clicked:!");
    setText(text.toUpperCase());
  }
  const handleDOWNClick=()=>{
    console.log("button was clicked:!");
    setText(text.toLowerCase());
  }
  const handleChange=(e)=>{
    console.log("on change");
    setText(e.target.value)
  }
  function handleClear(){
    setText("")
  }
  return (
    <>
      <div className="container"><div className="mb-3">
        <label for="myBox" className="form-label">
          {props.heading}
        </label>
        <textarea
          className="form-control"
          id="myBox"
          rows="10"
          value={text}
          onChange={handleChange}
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handleUPClick}>UpperCase</button>
        <button className="btn btn-primary ms-3" onClick={handleDOWNClick}>LowerCase</button>
        <button className="btn btn-secondary mx-3" onClick={handleClear}>Clear</button>
      </div></div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>Time to Read: {0.48* text.split(" ").length} sec</p>
        <h1>Preview</h1>
        <p>{text}</p>

      </div>
    </>
  );
}

export default TextForm;
