import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = (props) => (
  <Aux>
    <div className="container-fluid">
      <div className="row">
        <Toolbar />
      </div>
      <div className="row">
        {props.children}
      </div>
    </div>
  </Aux>
)

export default layout;
