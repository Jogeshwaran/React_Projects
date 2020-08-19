import React from 'react'
import BurgerLogo from '../../../assets/images/burger-logo.png'
import classes from './Logo.css'
function Logo(props) {
    return (
        <div className = {classes.Logo} >
        <img src = {BurgerLogo} alt = "MyLogo" />
            
        </div>
    )
}

export default Logo
