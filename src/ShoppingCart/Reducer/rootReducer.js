import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    counterReducer: counterReducer,
    cartReducer: cartReducer
})

export default rootReducer;