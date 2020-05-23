import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../Actions/actionCreator'
import { bindActionCreators } from 'redux';

let quantityHomePage = 0;
let totalAmountHomePage = 0;

class HomePage extends Component {

    handleClick = (team) => {
        this.props.actionCreator.addToCart(team.id);
        quantityHomePage += (team.price - (team.price * team.discount) / 100);
        totalAmountHomePage++;
        this.props.actionCreator.Checkout(quantityHomePage, totalAmountHomePage);
    }

    render() {
        let itemList = this.props.items.map((item) => {
            return (
                <div style={{ marginRight: '10px' }} key={item.id}>
                    <div>
                        <img src={item.img} alt={item.title} height='275px' width='275px'></img>
                    </div>
                    <span><b>{item.title}</b></span>
                    <span style={{ marginLeft: '120px' }} to="/"><button type="button" className="btn btn-success" onClick={() => { this.handleClick(item) }}> Add </button></span>
                    <p style={{ width: '360px' }}>{item.desc}</p>
                    <div style={{ display: 'flex' }}>
                        <span>
                            <b>Price: {item.price} Rs.</b>
                        </span>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div style={{ marginLeft: "25px" }}>
                    <div style={{ display: 'flex' }}>
                        <span>
                            <h2>Our Items</h2>
                        </span>
                        <span style={{ marginLeft: '1150px', marginTop: '3px' }}>
                            <button className="btn btn-info" type='button' onClick={() => { this.props.history.push('/cart') }}>Go to Cart</button>
                        </span>
                    </div>
                    <div style={{ display: 'flex', flexFlow: 'wrap' }}>
                        {itemList}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // total: state.cartReducer.total,
        items: state.cartReducer.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionCreator: bindActionCreators(actionCreator, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
