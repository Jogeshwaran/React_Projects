import React from 'react'
import classes from './Toolbar.css'
import Logo from './Logo/Logo'
import NavigationItems from './Navigation/NavigationItems/NavigationItems'
import DrawerToggle from './DrawerToggle/DrawerToggle'
function Toolbar(props) {
    return (
        <header className = {classes.Toolbar}>
        <DrawerToggle clicked = {props.open} />
        <div className = {classes.Logo}>
        <Logo />
        </div>
        
        
        <nav className = {classes.desktopOnly}>
            <NavigationItems />
        </nav>
        </header>
    )
}

export default Toolbar