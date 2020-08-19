import React ,{Component} from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/layouts/Burger/Burger'
import BuildControls from '../../components/layouts/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/UI/Modal/OrderSummary/OrderSummary';

//Global Constant

const INGREDIENTS_PRICE = {
    Salad : 50,
    Cheese : 60,
    Bacon : 70,
    Meat : 80
}
class BurgerBuilder extends Component{
    state = {
        ingredients : {
        Salad : 0,
        Bacon : 0,
        Meat : 0,
        Cheese :0
        },
        totalPrice : 40,
        purchaseable : false,
        purchasing : false,

            }

    updatePurchaseable (ingredients) {
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum,el) =>{
            return sum + el
        },0)
        this.setState({purchaseable:sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceAddition = INGREDIENTS_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({ingredients:updatedIngredients , totalPrice:newPrice})
        this.updatePurchaseable(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <=0){
            return;
        }
        const updatedCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceDeduction = INGREDIENTS_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction
        this.setState({ingredients:updatedIngredients , totalPrice:newPrice})
        this.updatePurchaseable(updatedIngredients)
        

    }

    purchaseHandler = () =>{
        this.setState({purchasing : true})
    }
    modalClosedHandler = () => {
        this.setState({purchasing:false})
    }
    purchaseContinueHandler = () => {
        alert("Please Wait order in Progress 😋😋")
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        console.log(disabledInfo)
        return(
            <Aux>
                <Modal showModal = {this.state.purchasing} modalClosed = {this.modalClosedHandler}>
                    <OrderSummary ingredients = {this.state.ingredients}
                        purchaseCancelled = {this.modalClosedHandler}
                        purchaseContinued = {this.purchaseContinueHandler}
                        price = {this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler} 
                ingredientRemoved = {this.removeIngredientHandler}
                disabled = {disabledInfo} 
                price = {this.state.totalPrice}
                purchase = {this.state.purchaseable}
                ordered = {this.purchaseHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;

//Burger div consits of Gui of the Burger we are going to build
//Build controls has the ingredients of the Burger