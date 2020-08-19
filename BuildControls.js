import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from '../BuildControls/BuildControls.css'

const control = [
    {label:'Salad' , type:'Salad'},
    {label:'Cheese' , type:'Cheese'},
    {label:'Meat' , type:'Meat'},
    {label:'Bacon' , type:'Bacon'},
]

function BuildControls(props) {
    return (
        <div className = {classes.BuildControls}>
        <p>CurrentPrice = <strong>{props.price}</strong></p>
        {control.map(ctrl => {
            console.log(ctrl.label)
            console.log(ctrl.type)
            return <BuildControl 
            key = {ctrl.label} 
            label = {ctrl.label}
            added = {() => props.ingredientAdded(ctrl.type)}
            removed = {() => props.ingredientRemoved(ctrl.type)}
            hided = {props.disabled[ctrl.type]}
            />
        })}
        <button className = {classes.OrderButton} disabled = {! props.purchase} onClick = {props.ordered}>ORDER NOW 🍔</button>

        </div>

    )
}

export default BuildControls
