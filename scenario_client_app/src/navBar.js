import React, {useState} from 'react';
import './navBar.css';

export default function NavBar({clickHandler}) {
    
    return (
        <div id="navigation">
            <ul>
                <button onClick={()=>clickHandler('1')}>תרחיש מבצעי</button>
                <button onClick={()=>clickHandler('1')}>שלב 1</button>
                <button onClick={()=>clickHandler('2')}>שלב 2</button>
                <li><a href="#">שלב 3</a></li>
                <li><a href="#">שלב 4</a></li>
            </ul>
        </div>
    );
  }