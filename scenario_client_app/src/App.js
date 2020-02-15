import React, {useState} from 'react';
import './App.css';
import ProcessIcon from './processIcon.js';
import NavBar from './navBar.js';
import AlertMessage from './General/alertMessage';
import Countdown from "./General/Countdown";

function App() {

  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function clickHandler(stage){
    switch(stage) {
      case 'one':
        setState1(!state1);
        setIsOpen(!isOpen);
        break;
      case 'two':
        setState2(!state2);
        break;
      case 'three':
        setState3(!state3);
        break;
      case 'four':
        setState4(!state4);
        break;
    }
  }
  return (
    <div className="app-global">
        <NavBar clickHandler={clickHandler}></NavBar>
        <ProcessIcon state1={state1} state2={state2} state3={state3} state4={state4}></ProcessIcon>
        <Countdown isOpen={isOpen} />
        <AlertMessage isOpen={isOpen} />
    </div>
  );
}

export default App;