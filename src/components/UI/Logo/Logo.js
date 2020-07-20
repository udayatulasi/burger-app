import React from 'react'
import burgerLogo from '../../../assets/images/original.png'
import classes from './Logo.module.css'


function Logo(props) {
    return (
        <div className={classes.Logo}
            style={{height:props.height}}>
            <img src={burgerLogo}  alt="My Burger"/>
        </div>
    )
}

export default Logo
