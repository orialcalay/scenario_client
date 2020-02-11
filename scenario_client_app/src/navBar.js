import React, {useState} from 'react';
import './navBar.css';

export default function NavBar({clickHandler}) {
    
    return (
        <div id="navigation">
            <ul>
                <button onClick={()=>clickHandler('')}>תרחיש מבצעי</button>
                <button onClick={()=>clickHandler('one')}>שלב 1</button>
                <button onClick={()=>clickHandler('two')}>שלב 2</button>
                <button onClick={()=>clickHandler('three')}>שלב 3</button>
                <button onClick={()=>clickHandler('four')}>שלב 4</button>
            </ul>
        </div>
    );
  }