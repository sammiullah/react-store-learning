import React, { Component } from 'react'
import Logo from '../inovedia-logo.png'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

import styled from 'styled-components'

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" to="/cart">
                    <img src={Logo} alt="Logo Alt"></img>
                </Link>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>

                    </ul>
                    <span className="navbar-text">
                        <Link to="/cart">
                            <ButtonContainer>
                                <span className="mr-2 ">
                                    <i className="fa fa-cart-plus"></i>
                                </span>
                         my cart
                            </ButtonContainer>
                        </Link>


                    </span>
                </div>
            </nav>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
`