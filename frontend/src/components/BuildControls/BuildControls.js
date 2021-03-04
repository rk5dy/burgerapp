import React from 'react';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Meat', type: 'meat'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'}
];

const buildControls = (props) => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Current Price: </h1>
        <p className="lead">${props.price.toFixed(2)} </p>
      </div>
     {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabledInfo[ctrl.type]}/>
      ))}
      <button className="btn btn-primary" disabled={!props.purchaseable}>ORDER NOW</button>
    </div>
  );
}

export default buildControls;
