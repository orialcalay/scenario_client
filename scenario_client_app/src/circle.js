import React, {useState} from 'react';
import './circle.css';

export default function Circle({initialState, text}) {
    const [isActive] = useState(initialState);

    let className = 'circle-style';
    if(isActive == 'true'){
        className += ' circle-active';
    }
    return (
        <div className={className}>
            <span className='circle-text'>{text}</span>
        </div>
    );
  }