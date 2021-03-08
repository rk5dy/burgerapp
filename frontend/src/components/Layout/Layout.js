import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = (props) => (
  <Aux>
    <div class="container-fluid">
      <div class="row">
        <Toolbar />
      </div>
      <div class="row">
        {props.children}
      </div>
    </div>
  </Aux>
)

export default layout;
