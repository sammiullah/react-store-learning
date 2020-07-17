import React from 'react'

export default function CartItem({ value, plus, minus ,removeItem }) {
    const { id, img, title, count, price, total } = value;
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 xs-auto col-lg-2 text-center">
                        <img src={img} className="img-fluid" style={{height:"50px"}}></img>
                    </div>
                    <div className="col-10 xs-auto col-lg-2 text-center align-middle">
                        <p className="align-middle">{title}</p>
                    </div>
                    <div className="col-10 xs-auto col-lg-2 text-center">
                        {price}
                    </div>

                    <div className="col-10 xs-auto col-lg-2 text-center">
                        <span className="countBtn" onClick={() => minus(id)}>
                            -
                        </span>

                        <span className="countBtn">
                            {count}
                        </span>

                        <span className="countBtn" onClick={() => plus(id)}>
                            +
                        </span>
                    </div>
                    <div className="col-10 xs-auto col-lg-2 text-center">
                        <span onClick={()=>removeItem(id)} className="fa fa-trash text-danger" ></span>
                    </div>
                    <div className="col-10 xs-auto col-lg-2 text-center">
                        {total}
                    </div>


                </div>

            </div>
        </div>
    )
}
