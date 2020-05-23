import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../Actions/actionCreator'
import { bindActionCreators } from 'redux';

class YourOrder extends Component {
    render() {
        let itemsInCart = this.props.orderId ?
            (
                <div style={{ marginLeft: "25px" }} >
                    <h2>Your Order</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <td><b>Order ID</b></td>
                                <td><b>Order Name</b></td>
                                <td><b>Edit</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{Math.ceil(Math.random() * 10000)}</td>
                                <td>{this.props.name}</td>
                                <td>
                                    <button className="btn btn-primary" type='button' onClick={() => {
                                        this.props.history.push('/orderDetails')
                                    }}>Details View</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
            :
            (
                <h2 style={{ marginTop: '20px' }}><b>Nothing added in your cart</b></h2>
            )

        return (
            <div>
                {itemsInCart}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.cartReducer.addedItems,
        orderId: state.cartReducer.orderId,
        name: state.cartReducer.name,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionCreator: bindActionCreators(actionCreator, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourOrder);