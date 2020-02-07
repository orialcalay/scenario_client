import React, {useState} from 'react';
import './processIcon.css';
import Circle from './circle.js';

export default function ProcessIcon() {
    
    return (
        <div className='process-icon'>
            <Circle initialState='true' text='נהג עצור'></Circle>
            <div className='line-style'></div>
            <i className='arrow-down'></i>
            <Circle initialState='false' text='נהג סע'></Circle>
            <div className='line-style'></div>
            <i className='arrow-down'></i>
            <Circle initialState='false' text='צלב על'></Circle>
            <div className='line-style'></div>
            <i className='arrow-down'></i>
            <Circle initialState='false' text='ירי'></Circle>
        </div>
    );
  }