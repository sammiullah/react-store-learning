import React from 'react'
import { Link} from 'react-router-dom'
export default function PageNotFound(props) {
    return (
        <div className="container">

        <div className="row">
            <div className="col-10 mt-5 text-center mx-auto col-lg-10 col-md-10">
            <h1 className="text-danger">404</h1>
            <h1>Page Not Found !!!</h1>
            {
                console.log(props)
            }
            <h5>You required Url<span className="text-danger"> {props.location.pathname} </span> not exists</h5>
<h5 className="mt-3">
    <Link to="/" style={{textDecoration: "none"}}>
        Go to Products
    </Link>
</h5>
            </div>
        </div>

    </div>
    )
}
