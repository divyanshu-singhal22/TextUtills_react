// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch, 
//   Route,
//   Link,
//   BrowserRouter,
//   Routes
//  } from "react-router-dom"


//  let name = "Divyanshu"
function App() { 
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null )
    }, 2000);
  }
  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title =  "TextUtills - Dark Mode"
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>  
      {/* <BrowserRouter> */}
        <Navbar title="TextUtills" mode={mode} toggleMode ={toggleMode}/>
        <Alert alert= {alert}></Alert>
          <div className="container my-3">
            {/* <Routes> */}
              {/* <Route exact path="/about" element={ */}
              {/* <About /> */}
              {/* }></Route> */}
              {/* <Route exact path='/' element ={  */}
              <TextForm showAlert={showAlert} heading ="Enter Text tp analyze" mode= {mode}></TextForm>
              {/* // }></Route> */}
          
          {/* <About></About> */}
              {/* </Routes> */}
          </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
