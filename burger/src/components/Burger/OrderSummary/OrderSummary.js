import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component, dosen't have to be a class. Info and testing purpose reason for this as class.
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

/** ALT WAY OF DOING */
// class OrderSummary extends Component {
//     shouldComponentUpdate = nextProps => (
//         JSON.stringify(nextProps.ingredients) !== JSON.stringify(this.props.ingredients)
//     );
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li> );
        } );

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
} 

export default  OrderSummary;

// import React from 'react';

// import Aux from '../../../hoc/Auxiliary';
// import Button from '../../UI/Button/Button';

// const orderSummary = (props) => {
//     const ingredientSummary = Object.keys(props.ingredients)
//     .map(igKey => {
//         return (
//             <li key={igKey}>
//                 <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
//             </li> );
//     } );
//     return (
//         <Aux>
//             <h3>Your Order</h3>
//             <p>A delicious burger with the following ingredients:</p>
//             <ul>
//                 {ingredientSummary}
//             </ul>
//             <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
//             <p>Continue to Checkout?</p>
//             <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
//             <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
//         </Aux>
//     );
// };

// export default  orderSummary;
