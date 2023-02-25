import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert()
    }, 1500);
  }

  const handleDarkClick = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(79 80 100)'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} handleDarkClick={handleDarkClick}/>
        <Alert  alert={alert}/>
        <Routes>
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter text to analyze below " mode={mode}/>}/>
          <Route exact path='/about' element={<About heading="About Us: "/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
