import React, {useState} from 'react';
import './App.css';
import ProcessIcon from './processIcon.js';
import NavBar from './navBar.js';
import AlertMessage from './General/alertMessage';
import CountdownTimer from './General/countdownTimer';

function App() {

  const [state1, setState1] = useState(true);

  function clickHandler(ori){
    setState1(!state1);
  }

  return (
    <div className="app-global">
        <CountdownTimer></CountdownTimer>
        <NavBar clickHandler={clickHandler}></NavBar>
        <ProcessIcon state1={state1}></ProcessIcon>
        <AlertMessage></AlertMessage>
    </div>
  );
}

export default App;
