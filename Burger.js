import React from 'react';
import classes from '../Burger/Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';


const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        console.log(igKey)
        return [...Array(props.ingredients[igKey])].map((igKeyValues,index) => {
            console.log(igKey,index)
            return <BurgerIngredients key = {igKey+index} type = {igKey}/>
        })
    })
    .reduce((arr,el) => {
        return arr.concat(el)

    },[])


    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding the ingredients😋</p>
    }

    return(
        <div className = {classes.Burger}>
            <BurgerIngredients type = "Bread-Top" />
            {transformedIngredients}
            <BurgerIngredients type = "Bread-Bottom" />
        </div>

    );
}

export default burger;