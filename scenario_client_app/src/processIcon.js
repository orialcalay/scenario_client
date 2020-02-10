import React, {useState} from 'react';
import './processIcon.css';
import Circle from './circle.js';

export default function ProcessIcon({state1, state2, state3, state4}) {
    
    const [stage1, setStage1] = useState(true);
    const [stage2, setStage2] = useState(false);
    const [stage3, setStage3] = useState(false);
    const [stage4, setStage4] = useState(false);

    return (
        <div className='process-icon'>
            <Circle initialState={state1} text='נהג עצור'></Circle>
            <div className='line-style'></div>
            <i className='arrow-down'></i>
            <Circle initialState={stage2} text='נהג סע'></Circle>
            <div className='line-style'></div>
            <i className='arrow-down'></i>
            <Circle initialState={stage3} text='צלב על'></Circle>
            <div className='line-style'></div>
            <i className='arrow-down'></i>
            <Circle initialState={stage4} text='ירי'></Circle>
        </div>
    );
  }