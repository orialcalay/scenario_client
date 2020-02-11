import React, {useState} from 'react';
import './circle.css';

export default function Circle({initialState, text}) {
    
    let className = 'circle-style';
    if(initialState){
        className += ' circle-active';
    }
    return (
        <div className={className}>
            <span className='circle-text'>{text}</span>
        </div>
    );
  }