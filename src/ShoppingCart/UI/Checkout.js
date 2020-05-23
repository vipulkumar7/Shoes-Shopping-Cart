import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../Actions/actionCreator'
import { bindActionCreators } from 'redux';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address: '',
            mobile: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div style={{ marginLeft: "25px" }}>
                <h2>Checkout</h2>
                <div className="form-group" style={{ marginLeft: "25px" }}>
                    <label className="control-label col-sm-2" htmlFor="name">Name:</label>
                    <div className="col-sm-4">
                        <input
                            className="form-control"
                            name='name'
                            value={this.state.name}
                            placeholder="Enter your Full Name"
                            onChange={this.handleChange}
                        />
                    </div>
                    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                    <div className="col-sm-4">
                        <input
                            className="form-control"
                            name='email'
                            value={this.state.email}
                            placeholder="Enter your mail id"
                            onChange={this.handleChange}
                        />
                    </div>
                    <label className="control-label col-sm-2" htmlFor="address">Address:</label>
                    <div className="col-sm-4">
                        <input
                            className="form-control"
                            name='address'
                            value={this.state.address}
                            placeholder="Enter your Address"
                            onChange={this.handleChange}
                        />
                    </div>
                    <label className="control-label col-sm-2" htmlFor="mobile">Mobile No.:</label>
                    <div className="col-sm-4">
                        <input
                            className="form-control"
                            name='mobile'
                            value={this.state.mobile}
                            placeholder="Enter your Mobile No."
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />
                    <li><b>Total Amount: {this.props.totalAmount} Rs. </b></li>
                    <li><b>Total Items: {this.props.quantity}</b></li>
                </div>
                <div style={{ marginLeft: '15px' }}>
                    <button type="submit" className="btn btn-info" onClick={() => {
                        this.props.actionCreator.personDetails(this.state.name, this.state.email, this.state.address, this.state.mobile);
                        this.props.history.push('/orderDetails')
                    }}>Place Order</button>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        quantity: state.cartReducer.quantity,
        totalAmount: state.cartReducer.totalAmount,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionCreator: bindActionCreators(actionCreator, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);