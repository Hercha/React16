import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        // return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
        // Modal loadin every time ingredients pressed fix
        return nextProps.show !== this.props.show || nextProps.loading !== this.props.loading;
    }

/*     componentWillUpdate() {
        console.log('[Modal] WillUpdate');
    } */

    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1': '0',
                        visibility: this.props.show ? 'visible' : 'hidden'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;

// import React from 'react';

// import classes from './Modal.css';
// import Aux from '../../../hoc/Auxiliary';
// import Backdrop from '../Backdrop/Backdrop';

// const modal = (props) => (
//     <Aux>
//         <Backdrop show={props.show} clicked={props.modalClosed} />
//         <div 
//             className={classes.Modal}
//             style={{
//                 transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
//                 opacity: props.show ? '1': '0',
//                 visibility: props.show ? 'visible' : 'hidden'
//             }}>
//             {props.children}
//         </div>
//     </Aux>
// );

// export default modal;