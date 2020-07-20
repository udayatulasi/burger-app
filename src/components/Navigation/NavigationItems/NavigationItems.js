import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

function NavigationItems() {
    return (
        <div>
            <ul className={classes.NavigationItems}>
                <NavigationItem link='/' active>Burger Builder</NavigationItem>
            </ul>
        </div>
    )
}

export default NavigationItems
