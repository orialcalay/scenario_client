import React, {useState, useEffect} from 'react';
import './processIcon.css';
import Circle from './General/circle.js';

export default function ProcessIcon({state1, state2, state3, state4}) {
    
    return (
        <div className='process-icon'>
            <Circle initialState={state1} text='נהג עצור'></Circle>
            <div className='line-style'></div>
            <i className='arrow-down'></i>
            <Circle initialState={state2} text='נהג סע'></Circle>
            <div className='line-style'></div>
            <i className='arrow-down'></i>
            <Circle initialState={state3} text='צלב על'></Circle>
            <div className='line-style'></div>
            <i className='arrow-down'></i>
            <Circle initialState={state4} text='ירי'></Circle>
        </div>
    );
  }