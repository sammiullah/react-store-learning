import React from 'react'
import { Link } from 'react-router-dom'

export default function CartTotal(props) {
    const { subTotal, total, cartTax ,clearCart } = props.value;
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-10 xs-auto col-lg-12 text-right">
                        <div>
                            <Link to="/">
                                <button onClick={()=>clearCart()} className="btn btn-danger text-white" >
                                    Clear Cart
    </button>
                            </Link>

                        </div>
                        <div className="mt-2">
                            <span >
                                Sub Total  :  ${subTotal}
                            </span>
                        </div>
                        <div className="mt-2">
                            <span>
                                Sub Total  :  ${cartTax}
                            </span>
                        </div>
                        <div className="mt-2">
                            <span>
                                Sub Total  :  ${total}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
