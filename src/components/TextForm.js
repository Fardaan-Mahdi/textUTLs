import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");
  const handleClick=()=>{
    console.log("button was clicked:!");
    setText(text.toUpperCase());
  }
  const handleChange=(e)=>{
    console.log("on change");
    setText(e.target.value)
  }
  function handleClear(){
    setText("Enter Text Here")
  }
  return (
    <>
      <div className="mb-3">
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
        <button className="btn btn-primary my-3" onClick={handleClick}>UpperCase</button>
        <button className="btn btn-secondary mx-3" onClick={handleClear}>Clear</button>
      </div>
    </>
  );
}

export default TextForm;
