import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns';
import { ContextConsumer } from '../../ContextProvider'
import CartList from './CartList';
import CartTotal from './CartTotal';

export default class Cart extends Component {
    render() {
        return (
            <ContextConsumer>
                {
                    (value) => {
                        
                        if (value.cart.length == 0) {
                            return (
                                <React.Fragment>
                                    <Title name="Your Cart is empty..." />
                                </React.Fragment>
                            )
                        }
                        else{
                            return (
                                <React.Fragment>
                                    <Title name="Your" title="Cart" />

                                    <CartColumns />
                                    <CartList value={value}></CartList>

                                    <CartTotal  value={value}></CartTotal>
                                </React.Fragment>
                            )
                        }
                    }
                }

            </ContextConsumer>

        )
    }
}
