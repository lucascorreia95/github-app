import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppIndex from '../App'
import SingleUser from '../singleuser/SingleUser'
import Header from '../template/Header'

export default props => (
    <Router>
        <div className="container">
            <Header />
            <Route exact path="/" component={AppIndex} />
            <Route path="/user" component={SingleUser} />
        </div>
    </Router>
)