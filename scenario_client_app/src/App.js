import React, {useState} from 'react';
import './App.css';
import ProcessIcon from './processIcon.js';
import NavBar from './navBar.js';
import AlertMessage from './alertMessage';

function App() {

  const [state1, setState1] = useState(true);

  function clickHandler(ori){
    setState1(false);
  }

  return (
    <div className="app-global">
        {/* <h1 className='app-header'>רשימת משימות של אורי אלקלעי</h1> */}
        {/* <ProcessIcon></ProcessIcon> */}
        <NavBar clickHandler={clickHandler}></NavBar>
        <ProcessIcon state1={state1}></ProcessIcon>
        <AlertMessage></AlertMessage>
    </div>
  );
}

export default App;
