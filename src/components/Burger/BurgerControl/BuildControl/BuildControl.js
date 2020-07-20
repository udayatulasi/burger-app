import React from 'react'
import classes from './BuildControl.module.css'
function BuildControl(props) {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.label}>{props.label}</div>
            <button className={classes.Less} 
            onClick={props.removed} 
            disabled={props.disabled}>
                less</button>
            <button className={classes.More} 
             onClick={props.added}>more</button>
        </div>
    )
}

export default BuildControl
