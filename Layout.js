import React , {Component} from 'react';

import Aux from '../../hoc/Aux';
import classes from '../layouts/Layout.css'
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../Toolbar/SideDrawer/SideDrawer';


class Layout extends Component{
    state = {
        showSideDrawer :false
    }

    sideDrawerOpenHandler = () => {
            this.setState((prevState) => {
            return {showSideDrawer : !prevState.showSideDrawer}
         } )
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false})
    }
    render(){
        return(
            <Aux>
            {/* <div>Sidebar,Toolbar,Backdrawer</div> */}
            <Toolbar open = {this.sideDrawerOpenHandler} />
            <SideDrawer open = {this.state.showSideDrawer}  closed = {this.sideDrawerClosedHandler}/>
            <main className = {classes.content}>
                {this.props.children}
            </main>
            </Aux>
        )
        
        }
    }
export default Layout;