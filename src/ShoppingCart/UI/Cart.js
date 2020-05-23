import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import * as actionCreator from '../Actions/actionCreator'
// import Checkout from './Checkout'

class Cart extends Component {

    handleAddQuantity = (id) => {
        this.props.actionCreator.addToCart(id)
    }

    handleSubtractQuantity = (id) => {
        this.props.actionCreator.subtractQuantity(id)
    }

    handleRemove = (id) => {
        this.props.actionCreator.removeItem(id)
    }

    render() {
        let Quantity = 0
        let totalAmountPerShoes = 0
        let totalAmount = 0
        let Discount = 0
        let DiscountedPrice = 0
        let totalQuantity = 0

        return (
            <div style={{ marginLeft: "25px" }}>
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                    <span>
                        <h3>You have ordered:</h3>
                    </span>
                    <span style={{ marginLeft: '1050px', marginTop: '3px' }}>
                        <button type="button" className="btn btn-info" onClick={() => {
                            this.props.actionCreator.Checkout(totalAmount, totalQuantity);
                            this.props.history.push('/checkout')
                        }}>Checkout</button>
                    </span>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Discount (%)</th>
                            <th>Amount</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map(item => {
                            if (item.id === 1) {
                                Quantity = item.quantity
                                Discount = item.discount
                                totalAmountPerShoes = (item.quantity * item.price)
                                DiscountedPrice = totalAmountPerShoes - (Discount * totalAmountPerShoes) / 100
                            }
                            else if (item.id === 2) {
                                Quantity = item.quantity
                                Discount = item.discount
                                totalAmountPerShoes = (item.quantity * item.price)
                                DiscountedPrice = totalAmountPerShoes - (Discount * totalAmountPerShoes) / 100
                            }
                            else if (item.id === 3) {
                                Quantity = item.quantity
                                Discount = item.discount
                                totalAmountPerShoes = (item.quantity * item.price)
                                DiscountedPrice = totalAmountPerShoes - (Discount * totalAmountPerShoes) / 100
                            }
                            else if (item.id === 4) {
                                Quantity = item.quantity
                                Discount = item.discount
                                totalAmountPerShoes = (item.quantity * item.price)
                                DiscountedPrice = totalAmountPerShoes - (Discount * totalAmountPerShoes) / 100
                            }
                            else if (item.id === 5) {
                                Quantity = item.quantity
                                Discount = item.discount
                                totalAmountPerShoes = (item.quantity * item.price)
                                DiscountedPrice = totalAmountPerShoes - (Discount * totalAmountPerShoes) / 100
                            }
                            else if (item.id === 6) {
                                Quantity = item.quantity
                                Discount = item.discount
                                totalAmountPerShoes = (item.quantity * item.price)
                                DiscountedPrice = totalAmountPerShoes - (Discount * totalAmountPerShoes) / 100
                            }
                            totalQuantity = totalQuantity + Quantity
                            totalAmount = totalAmount + DiscountedPrice
                            return (
                                <>
                                    <tr>
                                        <td>{item.title} </td>
                                        <td>{item.price} </td>
                                        <td>{Quantity}</td>
                                        <td>{item.discount}</td>
                                        <td>{DiscountedPrice}</td>
                                        <td>
                                            <Link style={{ marginRight: '15px' }} to="/cart">
                                                <button type="button" className="btn btn-primary btn-xs" onClick={() => { this.handleAddQuantity(item.id) }}>+</button>
                                            </Link>
                                            <Link to="/cart">
                                                <button type="button" className="btn btn-primary btn-xs" onClick={() => { this.handleSubtractQuantity(item.id) }}>-</button>
                                            </Link>
                                            <span style={{ marginLeft: '30px' }}>
                                                <button type="button" className="btn btn-primary" onClick={() => { this.handleRemove(item.id) }}>Remove</button>
                                            </span>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total</th>
                            <th />
                            <th>{totalQuantity}</th>
                            <th />
                            <th>{totalAmount}</th>
                            <th />
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.cartReducer.addedItems,
        total: state.cartReducer.total,
        quantity: state.cartReducer.quantity,
        totalAmount: state.cartReducer.totalAmount,
        totalQuantity: state.cartReducer.totalQuantity
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionCreator: bindActionCreators(actionCreator, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)