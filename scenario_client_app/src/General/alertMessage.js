import React, {useState} from 'react';
import './alertMessage.css';

export default function AlertMessage({isOpen}) {
    
    const alert = <div className='alert'>הודעת אזהרה לנהג</div>;

    return (
        <div>
            {isOpen && <div className='alert'>הודעת אזהרה לנהג</div>}
        </div>
    );
  }