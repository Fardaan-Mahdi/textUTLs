import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
// import About from './components/About';

function App() {
  const [mode, setMode]=useState('light');
  const toggleMode=()=>{
    if (mode === 'dark') {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    } else {
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
    }
  
    setMode(prevMode=>(prevMode==='light'? 'dark':'light'))
    
  }
  return (
    <>
      <Navbar  title="textUTLs" about="About" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar /> */}
      <div className="container">
        <TextForm heading='Enter Text' mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
