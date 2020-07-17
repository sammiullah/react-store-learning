import React, { Component } from 'react'
import { ContextConsumer } from '../ContextProvider'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'
import Title from './Title'
export default class Detail extends Component {
    render() {
        return (
            <div>
                <ContextConsumer>
                    {
                        (value) => {
                            const { id, img, title, price, info, company, inCart } = value.detailProduct;
                            return (
                                <React.Fragment>
                                    <div className="container">
                                        <Title name={title}></Title>
                                        <div className="row">

                                            <div className="col-10 mx-auto col-md-6">
                                                <img src={img} alt="Product Image"></img>
                                            </div>

                                            <div className="col-10 mx-auto col-md-6">
                                                <h2>Model : {title}</h2>
                                                <p className=" text-muted text-capitalize mt-2 mb-3">made by : {company}</p>
                                                <p className="  text-capitalize mt-2 mb-3">Price : $ {price}</p>
                                                <p className="  text-capitalize mt-2 mb-3">Some info about product</p>
                                                <p className="  text-muted text-capitalize mt-2 mb-3"> {info}</p>

                                                <Link to="/">
                                                    <ButtonContainer>
                                                        Go to Products
                                </ButtonContainer>
                                                </Link>

                                                <ButtonContainer
                                                    onClick={() => value.addtoModel(id)}
                                                    disabled={inCart ? true : false} onClick={() => value.addToCart(id)}
                                                    cart>
                                                    {
                                                        inCart ? "In Cart" : "Add Cart"
                                                    }
                                                </ButtonContainer>




                                                <p className=" text-muted text-capitalize"></p>
                                            </div>
                                        </div>

                                    </div>
                                </React.Fragment>
                            )
                        }
                    }
                </ContextConsumer>

            </div>
        )
    }
}
