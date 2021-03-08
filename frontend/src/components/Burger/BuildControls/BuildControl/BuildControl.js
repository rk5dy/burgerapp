import React from 'react';

const buildControl = (props) => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <button className="btn btn-success" onClick={props.added}>Add</button>
      <button className="btn btn-warning" onClick={props.removed} disabled={props.disabled}>Remove</button>
    </div>
  )
}

export default buildControl;
