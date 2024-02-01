import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
  const handleUPClick=()=>{
    console.log("button was clicked:!");
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase","info");
  }
  const handleDOWNClick=()=>{
    console.log("button was clicked:!");
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase","info");
  }
  const handleChange=(e)=>{
    console.log("on change");
    setText(e.target.value)
  }
  function handleClear(){
    setText("")
    props.showAlert("Cleared","info");
  }

  const wordsCount=(text)=>{
    if(text===""){
        return 0;
    }
    const array=text.trim().split(/\s+/);
    return array.length;
  }
  return (
    <>
      <div className="container"><div className="mb-3">
        <label htmlFor="myBox" className="form-label mt-5">
          {props.heading}
        </label>
        <textarea
          style={{backgroundColor: 
          props.mode==='dark'?'#042743':'white' , 
          color: props.mode==='dark'?'white':'black'}}
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
        <p>{wordsCount(text)} words and {text.length} characters.</p>
        <p>Time to Read: {0.48* text.split(" ").length} sec</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Enter Something"}</p>

      </div>
    </>
  );
}

export default TextForm;
