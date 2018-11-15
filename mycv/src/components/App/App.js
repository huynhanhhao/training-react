import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Product from '../Products/Product'
import RouterURL from '../RouterURL/RouterURL';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div id="main-content">
          <Nav></Nav>
          <div className="container">
            <RouterURL></RouterURL>
            <Footer></Footer>
          </div>
        
      </div>
      </Router>
    );
  }
}

export default App;
