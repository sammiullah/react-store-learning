import React, { Component } from 'react'
import Title from './Title'
import { ContextConsumer } from '../ContextProvider'
import { Product } from '.'

export default class Productlist extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Title name="our" title="products"></Title>
                    <div className="row">
                        <ContextConsumer>
                            {
                                (value) => {
                                    return (
                                        value.products.map(product => {
                                            return <Product key={product.id} product={product} />
                                        })
                                    )
                                }
                            }
                        </ContextConsumer>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
