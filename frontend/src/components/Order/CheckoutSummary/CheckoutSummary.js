import React from 'react';
import Burger from '../../Burger/Burger';

const checkoutSummary = (props) => {
  return (
    <div className="container-fluid">
      <h1>Hope it tastes good!</h1>
      <div>
        <Burger ingredients={props.ingredients}/>
        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={props.checkoutCancelled}>Cancel</button>
        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={props.checkoutContinued}>Yes</button>
      </div>
    </div>
  )
}

export default checkoutSummary;
