import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import About from './components/About';
import About2 from './components/About2';
import Alert from './components/Alert';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';


function App() {

  const [mode,setMode] = useState('light');   //whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enabled','success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled','success')
    }
  }


    const greenMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#86fa66'
      showAlert('Dark mode has been enabled','success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled','success')
    }
  }

  const yellowMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#c2c95d'
      showAlert('Dark mode has been enabled','success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled','success')
    }
  }




const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);
    },3000);

  }


  return (
    <>


          <BrowserRouter>
          <Navbar title={'Textutils1'} aboutText={'About Me'} mode={mode} toggleMode={toggleMode} greenMode={greenMode} yellowMode={yellowMode} />
            <Routes>
              <Route path='/' element={<Home mode={mode}/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/textform' element={<TextForm heading='Enter Your Text Here' mode={mode} showAlert={showAlert}/>}/>
              {/* <Route path='/about2' element={<About2/>}/> */}

            </Routes>
          </BrowserRouter> 
    
      
      {/* <Navbar title={'Textutils1'} aboutText={'About Me'} mode={mode} toggleMode={toggleMode} greenMode={greenMode} yellowMode={yellowMode} />
      <Alert alert={alert}/>

      <div className="container my-3" >
        <TextForm heading='Enter Your Text Here' mode={mode} showAlert={showAlert}/>
      </div> */}

      {/* <About/> */}
      {/* <About2/> */}
    </>
  );
}

export default App;
