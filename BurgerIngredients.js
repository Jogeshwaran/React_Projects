import React from 'react'
import classes from '../BurgerIngredients/BurgerIngredients.css'
import PropTypes from 'prop-types'

function BurgerIngredients(props) {
    let ingredient = null;
    switch(props.type){
        case('Bread-Bottom'):
        ingredient = <div className = {classes.BreadBottom}></div>
        break;
        case('Bread-Top'):
        ingredient = (
            <div className = {classes.BreadTop}>
            <div className = {classes.Seeds1}></div>
            <div className = {classes.Seeds2}></div>
            </div>
        );
        break;
        case('Meat'):
        ingredient = <div className = {classes.Meat}></div>
        break;
        case('Cheese'):
        ingredient = <div className = {classes.Cheese}></div>
        break;
        case('Salad'):
        ingredient = <div className = {classes.Salad}></div>
        break;
        case('Bacon'):
        ingredient = <div className = {classes.Bacon}></div>
        break;

        default:
            ingredient = null

    }
    return ingredient
}

BurgerIngredients.prototype = {
    type : PropTypes.string.isRequired
}
// We are validating our component with the prop Type if we not mentioning with the type then it will throw an error
// It also has to pass the isrequired criteria

export default BurgerIngredients;