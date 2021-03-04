import React from 'react';
import Aux from '../../hoc/Aux';
const layout = (props) => (
  <Aux>
    <div className="container-fluid">
      Toolbar, sidebar, backdrop
    </div>
    <main>
      {props.children}
    </main>
  </Aux>
)

export default layout;
