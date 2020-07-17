import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ContextConsumer } from '../ContextProvider'
import { ButtonContainer } from './Button'

export default class Modal extends Component {
    render() {
        return (
            <ContextConsumer>
                {
                    (value) => {

                        const { CloseModel, openModel } = value;
                        const { id, img, title, price } = value.detailProduct;

                        if (!openModel) {
                            return null;
                        }
                        else {
                            return (
                                <ModelContainer className="padding-10">


                                    <div className="container">
                                        <div className="row">
                                            <div id="Modal" className="col-9 mx-auto col-md-6 col-lg-4 text-center" >
                                                <h5>Item Added to Cart</h5>
                                                <img src={img} className="img-fluid"></img>
                                                <p>Price: ${price}</p>
                                                <Link to="/">
                                                    <ButtonContainer onClick={()=> CloseModel() }>
                                                        Continue Shopping
                                                        </ButtonContainer>

                                                </Link>
                                                <Link to="/cart">
                                                    <ButtonContainer cart onClick={()=>CloseModel()}>
                                                        Go to Cart
                                                        </ButtonContainer>

                                                </Link>


                                            </div>
                                        </div>

                                    </div>
                                </ModelContainer>
                            )
                        }

                    }
                }
            </ContextConsumer>
        )
    }
}
const ModelContainer = styled.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
background-color: rgba(0,0,0,.5);
display: flex;
align-items:center;
justify-content: center;
#Modal{
     background: var(--mainWhite);
     padding: 10px;
}
`