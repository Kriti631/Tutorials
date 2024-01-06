import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";  // Importing React Router Dom
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');   //whether dark mode enabled or not
  const [alert, setalert] = useState(null);
  const showAlert=(message, type)=>{
      setalert ({
        msg:message,
        type: type
      })
      setTimeout(() => {
        setalert(null);
      }, 1500);
  }
  const toggleMode=()=> {
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#0d0e21';
      showAlert('Dark mode has been enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled', 'success');

    }
  }

  return (

    <>
    <Router>
      <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      
      <div className="container my-3">
      
            <Routes>
            <Route exact path="/about" element={<About/>}/>            
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}/>
            </Routes>
            

          
      </div>
      </Router>
  </>
);
}

export default App;
