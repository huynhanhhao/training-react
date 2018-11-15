import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Product from '../Products/Product';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
class RouterURL extends Component {
    render() {
        return (
                <div>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/san-pham" component={Product} />
                        <Route path="/lien-he" component={Contact} />
                        <Route component={Home} />
                    </Switch>
                </div>
        );
    }
}

export default RouterURL;