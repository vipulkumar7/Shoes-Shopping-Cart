import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../Actions/actionCreator'
import { bindActionCreators } from 'redux';

class OrderDetails extends Component {
    render() {
        let orderID = Math.ceil(Math.random() * 10000)
        return (
            <div style={{ marginLeft: "25px" }}>
                <h2>Order Details</h2>
                <div>
                    <li><b>Name: </b> {this.props.name}</li>
                    <li><b>Email: </b> {this.props.email}</li>
                    <li><b>Address: </b> {this.props.address}</li>
                    <li><b>Mobile No.: </b> {this.props.mobile}</li>
                </div>
                <li><b>Total Amount: {this.props.totalAmount} Rs. </b></li>
                <li><b>Total Items: {this.props.quantity}</b></li>
                <div style={{ marginTop: '20px' }}>
                    <button type='button' className="btn btn-info" onClick={(e) => {
                        this.props.actionCreator.orderId(orderID)
                        this.props.history.push('/yourOrders')
                    }}>
                        Your Order
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        quantity: state.cartReducer.quantity,
        totalAmount: state.cartReducer.totalAmount,
        name: state.cartReducer.name,
        email: state.cartReducer.email,
        address: state.cartReducer.address,
        mobile: state.cartReducer.mobile,
        orderId: state.cartReducer.orderId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionCreator: bindActionCreators(actionCreator, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);