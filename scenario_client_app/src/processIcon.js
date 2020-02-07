import React, {useState} from 'react';
import './processIcon.css';
import Circle from './circle.js';

export default function ProcessIcon() {
    
    return (
        <div>
            <Circle initialState='true'></Circle>
            <div className='line-style'></div>
            <Circle initialState='false'></Circle>
            <div className='line-style'></div>
            <Circle initialState='false'></Circle>
            <div className='line-style'></div>
            <Circle initialState='false'></Circle>
        </div>
    );
  }