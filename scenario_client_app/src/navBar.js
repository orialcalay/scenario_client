import React, {useState} from 'react';
import './navBar.css';

export default function NavBar() {
    
    return (
        <div id="navigation">
            <ul>
                <li><a href="#">תרחיש מבצעי</a></li>
                <li><a href="#">שלב 1</a></li>
                <li><a href="#">שלב 2</a></li>
                <li><a href="#">שלב 3</a></li>
                <li><a href="#">שלב 4</a></li>
            </ul>
        </div>
    );
  }