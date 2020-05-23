import { INCREMENT, DECREMENT, ADD_TO_CART, ADD_QUANTITY, ADD_QUANTITY_WITH_NUMBER, REMOVE_ITEM, SUB_QUANTITY, CHECKOUT, PERSON_DETAILS, ORDER_ID } from './actionTypes'

export const increment = () => {
    return {
        type: INCREMENT,
    }
}

export const decrement = () => {
    return {
        type: DECREMENT,
    }
}

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}

export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

export const addQuantityWithNumber = (id) => {
    return {
        type: ADD_QUANTITY_WITH_NUMBER,
        id
    }
}

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

//subtract qt action
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}

export const Checkout = (totalAmount, totalQuantity) => {
    return {
        type: CHECKOUT,
        payload: {
            totalAmount,
            totalQuantity
        }
    }
}

export const personDetails = (name, email, address, mobile) => {
    return {
        type: PERSON_DETAILS,
        payload: {
            name,
            email,
            address,
            mobile
        }
    }
}

export const orderId = (id) => {
    return {
        type: ORDER_ID,
        payload: {
            id
        }
    }
}