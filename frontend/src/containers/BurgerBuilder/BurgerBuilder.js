import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}
// name of order summary modal
const ORDER_SUMMARY_MODAL = "orderSummaryModal";

class BurgerBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4,
      purchaseable: false,
      purchasing: false
    }
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0);

    this.setState({purchaseable: sum > 0})
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const newPrice = INGREDIENT_PRICES[type] + oldPrice;
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - INGREDIENT_PRICES[type];
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseCancelHandler = () => {
    alert("Purchase canceled!");
  }
  //     public Order(int saladCount, int baconCount, int cheeseCount, int meatCount, double price, String orderName) {
  purchaseContinueHandler = () => {
    // const order = {
    //   saladCount: this.state.ingredients.salad,
    //   baconCount: this.state.ingredients.bacon,
    //   cheeseCount: this.state.ingredients.cheese,
    //   meatCount: this.state.ingredients.meat,
    //   price: this.state.totalPrice,
    //   orderName: 'tempname'
    // };
    // axios.post('/create', order)
    //   .then(response => console.log(response))
    //   .catch(error => console.log(error));
    const queryParams=[];
    for (let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    }
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <div className="container-fluid">
          <Modal keyId={ORDER_SUMMARY_MODAL}>
            <OrderSummary ingredients={this.state.ingredients}
              purchaseContinue={this.purchaseContinueHandler}
              purchaseCancel={this.purchaseCancelHandler}
              price={this.state.totalPrice}/>
          </Modal>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabledInfo={disabledInfo}
            price={this.state.totalPrice}
            purchaseable={this.state.purchaseable}
            orderSummaryModal={ORDER_SUMMARY_MODAL}/>
        </div>
      </Aux>
    )
  }
}

export default BurgerBuilder;
