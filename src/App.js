import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './ShoppingCart/UI/NavBar'
import HomePage from './ShoppingCart/UI/HomePage'
import Cart from './ShoppingCart/UI/Cart'
import Checkout from './ShoppingCart/UI/Checkout'
import OrderDetails from './ShoppingCart/UI/OrderDetails'
import YourOrder from './ShoppingCart/UI/YourOrder'
// import Counter from './ShoppingCart/Component/Counter';
// import Javascript from './ShoppingCart/Component/Javascript'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/cart' component={Cart} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/orderDetails' component={OrderDetails} />
          <Route path='/yourOrders' component={YourOrder} />
        </Switch>
      </BrowserRouter>
      // <Javascript />
    )
  }
}