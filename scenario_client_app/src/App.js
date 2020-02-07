import React from 'react';
import './App.css';
import ProcessIcon from './processIcon.js';
import NavBar from './navBar.js';

function App() {
  return (
    <div className="app-global">
        {/* <h1 className='app-header'>רשימת משימות של אורי אלקלעי</h1> */}
        {/* <ProcessIcon></ProcessIcon> */}
        <NavBar></NavBar>
        <ProcessIcon></ProcessIcon>
    </div>
  );
}

export default App;
