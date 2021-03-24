import React from 'react';
import Aux from '../../../hoc/Aux';

const modal = (props) => (
  <Aux>
    <div className="modal fade" id={props.keyId} role="dialog">
      <div className="modal-dialog">
        {props.children}
      </div>
    </div>
  </Aux>
);

export default modal;
