import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../UI/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

function Toolbar(props) {
    return (
        <div>
            <header className={classes.Toolbar}>
                <DrawerToggle clicked={props.drawertoggleclicked}/>
                <Logo height="80%"/>
                <nav className={classes.DesktopOnly}>
                    <NavigationItems />
                </nav>
            </header>
        </div>
    )
}

export default Toolbar
