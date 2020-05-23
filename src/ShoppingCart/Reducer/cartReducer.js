import Item1 from '../Images/item1.jpg'
import Item2 from '../Images/item2.jpg'
import Item3 from '../Images/item3.jpg'
import Item4 from '../Images/item4.jpg'
import Item5 from '../Images/item5.jpg'
import Item6 from '../Images/item6.jpg'
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, CHECKOUT, PERSON_DETAILS, ORDER_ID } from '../Actions/actionTypes'

const initialState = {
    items: [
        { id: 1, title: 'New Balance', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 3000, img: Item1, category: 'Running Shoes', discount: 10 },
        { id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 2800, img: Item2, category: 'Golf Shoes', discount: 20 },
        { id: 3, title: 'Nike', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 3500, img: Item3, category: 'Training Shoes', discount: 10 },
        { id: 4, title: 'Reebok', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 2600, img: Item4, category: 'Hiking Shoes', discount: 30 },
        { id: 5, title: 'Asics', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 2500, img: Item5, category: 'Soccer  Shoes', discount: 40 },
        { id: 6, title: 'Puma', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 2000, img: Item6, category: 'Basketball  Shoes', discount: 50 },
    ],
    addedItems: [],
    total: 0,
    quantity: 0,
    totalAmount: 0,
    orderId: 0
}

const cartReducer = (state = initialState, action) => {
    // console.log(state.addedItems, 'addedItems');
    switch (action.type) {
        case ADD_TO_CART: {
            //INSIDE HOME COMPONENT
            let addedItem = state.items.find((item) => {
                return (
                    item.id === action.id
                )
            })
            //check if the action id exists in the addedItems
            let existed_item = state.addedItems.find((item) => {
                return (
                    action.id === item.id
                )
            })
            // console.log(state.addedItems, 'addedItems');
            if (existed_item) {
                addedItem.quantity = addedItem.quantity + 1
                // console.log(addedItem.quantity, 'addedItem.quantity');
                return {
                    ...state,
                    total: state.total + addedItem.price,
                    quantity: state.quantity + 1
                }
            }
            else {
                addedItem.quantity = 1;
                let totalQuantity = state.quantity + addedItem.quantity
                // console.log(totalQuantity, 'totalQuantity');
                // console.log(state.addedItems, 'addedItems');

                //calculating the total
                let newTotal = state.total + addedItem.price
                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal,
                    quantity: totalQuantity
                }
            }
        }

        // // Inside Cart Component
        // case ADD_QUANTITY: {
        //     let addedItem = state.items.find((item) => {
        //         return (
        //             item.id === action.id
        //         )
        //     })
        //     addedItem.quantity = addedItem.quantity + 1;
        //     let newTotal = state.total + addedItem.price;
        //     return {
        //         ...state,
        //         total: newTotal,
        //         quantity: state.quantity + 1
        //     }
        // }

        case SUB_QUANTITY: {
            let addedItem = state.items.find((item) => {
                return (
                    item.id === action.id
                )
            })
            if (addedItem.quantity === 1) {
                let new_items = state.addedItems.filter((item) => {
                    return (
                        item.id !== action.id
                    )
                })
                let newTotal = state.total - addedItem.price
                return {
                    ...state,
                    addedItems: new_items,
                    total: newTotal,
                    quantity: state.quantity - 1
                }
            }
            else {
                addedItem.quantity = addedItem.quantity - 1;
                let newTotal = state.total - addedItem.price
                let totalQuantity = state.quantity - 1
                return {
                    ...state,
                    total: newTotal,
                    quantity: totalQuantity
                }
            }
        }

        case REMOVE_ITEM: {
            let itemToRemove = state.addedItems.find((item) => {
                return (
                    action.id === item.id
                )
            })
            let new_items = state.addedItems.filter((item) => {
                return (
                    action.id !== item.id
                )
            })
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
            let newTotalQuantity = state.quantity - (itemToRemove.quantity)
            return {
                ...state,
                addedItems: new_items,
                total: newTotal,
                quantity: newTotalQuantity
            }
        }
        case CHECKOUT: {
            return {
                ...state,
                totalAmount: action.payload.totalAmount,
            }
        }

        case PERSON_DETAILS: {
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                address: action.payload.address,
                mobile: action.payload.mobile
            }
        }

        case ORDER_ID: {
            return {
                ...state,
                orderId: action.payload.id
            }
        }

        default:
            return state;
    }
}

export default cartReducer;