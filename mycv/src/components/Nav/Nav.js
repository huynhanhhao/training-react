import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import RouterURL from '../RouterURL/RouterURL';
// import { NavLink } from 'react-router-dom';

class Nav extends Component {

    render() {
        return (
            <nav className="navbar navbar-fixed-top navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="#">Kay.Info</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><NavLink activeClassName="active" to="/">Trang chu</NavLink></li>
                                <li><NavLink activeClassName="active" to="/san-pham">San Pham</NavLink></li>
                                <li><NavLink activeClassName="active" to="/lien-he">Lien he</NavLink></li>
                            </ul>   
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;