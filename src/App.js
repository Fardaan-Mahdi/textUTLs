import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // const [greenMode,setGreenMode]=useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    } else {
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    }
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  // const toggleGreen=()=>{
  //   if (greenMode === 'green') {
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = 'black';
  //     showAlert("Light mode has been enabled","success")
  //   } else {
  //     document.body.style.backgroundColor = '#228B22';
  //     document.body.style.color = 'white';
  //     showAlert("Green mode has been enabled","success")
  //   }
  //   setGreenMode(prevMode=>(prevMode==='light'? 'green':'light'))
  // }

  return (
    <>
    <Router>
      <Navbar
        title="textUTLs"
        about="About"
        mode={mode}
        // greenMode={greenMode}
        toggleMode={toggleMode}
        // toggleGreen={toggleGreen}
      />
      {/* <Navbar /> */}
      <Alert alert={alert} />

      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter Text"
                mode={mode}
                // greenMode={greenMode}
              />
            }
          />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
