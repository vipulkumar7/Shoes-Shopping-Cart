import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar-default">
                <div style={{ backgroundColor: 'teal', padding: '20px' }}>
                    <span style={{ marginRight: '30px', fontSize: '20px' }}><NavLink style={{ color: 'white' }} to="/" exact>Shop</NavLink></span>
                    <span style={{ marginRight: '30px', fontSize: '20px' }}><NavLink style={{ color: 'white' }} to="/cart">Cart</NavLink></span>
                    <span style={{ marginRight: '30px', fontSize: '20px' }}><NavLink style={{ color: 'white' }} to="/checkout">Checkout</NavLink></span>
                    <span style={{ marginRight: '30px', fontSize: '20px' }}><NavLink style={{ color: 'white' }} to="/orderDetails">OrderDetails</NavLink></span>
                    <span style={{ marginRight: '30px', fontSize: '20px' }}><NavLink style={{ color: 'white' }} to="/yourOrders">Your Order</NavLink></span>
                </div>
            </nav>
        )
    }
}
