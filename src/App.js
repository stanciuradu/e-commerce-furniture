import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Page404 from './pages/Page404';
import Cart from './pages/CartPage/Cart';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/products' component={Products} />
        <Route path='/cart' component={Cart} />
        <Route path='*' component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
