import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import React,{ useState } from 'react';
// import About from './components/About';

function App() {
  const [mode, setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{setAlert(null)},1500);
  }
  const toggleMode=()=>{
    if (mode === 'dark') {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled","success")
    } else {
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled","success")
    }
  
    setMode(prevMode=>(prevMode==='light'? 'dark':'light'))
    
  }
  return (
    <>
      <Navbar  title="textUTLs" about="About" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar /> */}
      <Alert alert={alert}/>

      <div className="container">
        <TextForm showAlert={showAlert} heading='Enter Text' mode={mode}/>
        {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
