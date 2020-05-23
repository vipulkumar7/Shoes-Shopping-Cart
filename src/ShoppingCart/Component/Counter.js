import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../Actions/actionCreator'
import { bindActionCreators } from 'redux';

class Counter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.actionCreator.increment}>Increment</button>
                <span>{this.props.Count}</span>
                <button onClick={this.props.actionCreator.decrement}>Decrement</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Count: state.counterReducer.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionCreator: bindActionCreators(actionCreator, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

