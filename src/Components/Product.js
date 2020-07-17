import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { PropTypes } from 'prop-types'
import { ContextConsumer } from '../ContextProvider';

export default class Product extends Component {

    render() {
        const { id, img, title, inCart, price } = this.props.product;

        return (
            <ProductWrapper className="mx-auto col-sm-9 col-md-6 col-lg-3 my-2">
                <div className="card">
<ContextConsumer>
{
    (value)=>{
        return (
            <React.Fragment>
 
                    <div className='img-container p-5' onClick={()=>value.handleDetail(id)}>
                        <Link to="/detail">
                            <img src={img} className="card-img-top" />
                        </Link>
                        <button className="cart-btn" disabled={inCart ? true : false} 
                        onClick={
                            ()=>{
                                value.addToCart(id);
                                value.addtoModel(id);
                            }                          
                        }
                        >
                            {
                                inCart ?
                                    (<p>In Cart</p>) : (<i className=" fa fa-cart-plus" />)
                            }
                        </button>
                    </div>
                 
            </React.Fragment>
        )
    }
  }             
</ContextConsumer>

                    <div className="card-footer">
                        <span >
                            {title}
                        </span>

                        <span className="float-right">
                            $ {price}
                        </span>

                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        inCart : PropTypes.bool   

    }).isRequired
}


const ProductWrapper = styled.div`
.card{
    background-color: transparent;
    transition : all 1s linear;
}

.card-footer{
    background-color: transparent;
    border-top: transparent;
    transition : all .01s linear;
}

&:hover{
    .card{
        border : 0.1rem solid rgba(0,0,0,0.2);
        box-shadow : 5px 5px 5px 5px rgba(0,0,0,0.2);
    }
    .cart-btn{
        transform : translate(0,0);
    }
    
}


.img-container{
    position: relative;
    overflow: hidden;
}

.card-img-top{
    transition : all 1s linear;
}

.img-container: hover .card-img-top{
    transform: scale(1.2);
}

.cart-btn{
    position: absolute;
    bottom: 0;
    right:0;
    background: var(--lightBlue);
    padding: 0.2rem 0.4rem;
    color: var(--mainWhite);
    border : none;
    font-size: 1.4 rem;
    border-radius : 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;

}



`
