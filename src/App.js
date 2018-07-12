import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/products">Products</Link>
        {routes}
      </div>
    );
  }
}

export default App;