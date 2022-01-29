
import {useState} from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import {TextForm} from './components/TextForm';
import k, {a} from './module1';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] =  useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type:type
    });

    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  
  const toggleMode = (localMode) => {
    if(localMode === '#FFFFFF'){
      setMode('light');
      document.body.style.backgroundColor = '#FFFFFF';
      showAlert('light mode has been enabled', 'success');
      document.title = 'TextUtils - light mode';
    }
    else{
      setMode(localMode);
      document.body.style.backgroundColor = localMode;
      showAlert(localMode + ' has been enabled', 'success');
      document.title = 'TextUtils - dark mode';
    }
  }
  return (
  //  <Router>
  <>
    <Navbar title= {a} mode={mode} toggleMode = {toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />}> */}
          {/* </Route> */}
          {/* <Route exact path="/" element={<TextForm heading='Enter text to analyze' mode= {mode} showAlert = {showAlert} />} > */}
          <TextForm heading='Enter text to analyze' mode= {mode} showAlert = {showAlert} />
          {/* </Route> */}
        {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
