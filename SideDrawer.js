import React from 'react'
import Logo from '../Logo/Logo'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Modal/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'
function SideDrawer(props) {
    let overallClasses = [classes.SideDrawer,classes.Close];
        if (props.open){
            overallClasses = [classes.SideDrawer,classes.Open]
        }
    return (
        
        <Aux>
        <Backdrop show = {props.open} clicked = {props.closed}/>
        <div className = {overallClasses.join(' ')}>
        <div className = {classes.Logo}>
            <Logo />
        </div>
            <nav>
                <NavigationItems />
            </nav>                        
        </div>
        </Aux>
    )
}

export default SideDrawer
