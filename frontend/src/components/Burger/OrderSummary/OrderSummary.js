import React from 'react';

const orderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>);
    });
  return (
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Your order</h4>
      </div>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredients}
      </ul>
      <p><strong>Total price: ${props.price.toFixed(2)} </strong></p>
      <p>Continue to checkout?</p>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={props.purchaseCancel}>Cancel</button>
        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={props.purchaseContinue}>Yes</button>
      </div>
    </div>
  );
};

export default orderSummary;
