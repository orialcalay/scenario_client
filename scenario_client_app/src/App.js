import React from 'react';
import './App.css';
import Circle from './circle.js';

function App() {
  return (
    <div className="app-global">
        <h1 className='app-header'>רשימת משימות של אורי אלקלעי</h1>
        <Circle isActive='true'></Circle>
      </div>
  );
}

export default App;
