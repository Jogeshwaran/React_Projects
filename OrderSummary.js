import React, { memo, Component } from 'react'
import Aux from '../../../../hoc/Aux'
import Button from '../../Button/Button'
const OrderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (<li key = {igKey}>{igKey} : {props.ingredients[igKey]}</li>)
    })
    return(
        <Aux>
        <h3>Your Order 🤗 </h3>
        <p>A delicious burder with the following Ingredients</p>
        <ul >
            {ingredientsSummary}
        </ul>
        <p>price : {props.price}₹</p>
        <p>Continue to Checkout 🚀</p>
        <Button btntype = "Danger" clicked = {props.purchaseCancelled}>CANCEL</Button>
        <Button btntype = "Success" clicked = {props.purchaseContinued}>ORDER NOW!</Button>
        </Aux>

    )
}

export default memo(OrderSummary);