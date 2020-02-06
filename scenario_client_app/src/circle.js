import React, {useState} from 'react';
import './circle.css';

export default function Circle() {
    const [isActive] = useState(false);

    let className = 'circle-style';
    if(isActive){
        className += ' circle-active';
    }
    return (
        <div className={className}></div>
    );
  }