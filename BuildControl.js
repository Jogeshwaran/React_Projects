// single build control i.e (single Button)

import React from 'react';
import classes from '../BuildControl/BuildControl.css';

function BuildControl(props) {
    return (
        <div className = {classes.BuildControl}>
            <div className = {classes.Label}>{props.label}</div>
            <button className = {classes.Less} 
            onClick = {props.removed} 
            disabled = {props.hided}>Less</button>
            <button className = {classes.More} onClick = {props.added}>More</button>
        </div>
    )
}

export default BuildControl;