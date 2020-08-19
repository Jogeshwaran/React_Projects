import React, { Component } from 'react';
import classes from './Modal.css'
import Aux from '../../../hoc/Aux'
import Backdrop from './Backdrop/Backdrop';


class Modal extends Component{
  /*   shouldComponentUpdate(nextProps,nextState){
        return nextProps.show !== this.props.show
    }
    componentWillUpdate(){
        console.log('[MOdal] will update')
    } */
    render(){
        return(
            <Aux>
            <Backdrop show = {this.props.showModal} clicked = {this.props.modalClosed} />
            <div 
            className = {classes.Modal}
            style = {{
                transform:this.props.showModal ? 'translateY(0)' : 'translateY(-100)',
                opacity : this.props.showModal ? '1' : '0'
            }}
            >
                {this.props.children}
            </div>
            </Aux>
            )}
        
    }

    

export default Modal;