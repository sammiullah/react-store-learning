import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import { Product, Productlist, Cart, PageNotFound, Detail, NavBar, Modal } from './Components'

import 'bootstrap/dist/css/bootstrap.min.css';
import model from './Components/Modal';

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <Switch>
                <Route path="/" component={Productlist}  exact/>
                <Route path="/detail" component={Detail} />
                <Route path="/cart" component={Cart} />
                <Route component={PageNotFound} />
            </Switch>
            <Modal />

        </React.Fragment>
    );
}

export default App;