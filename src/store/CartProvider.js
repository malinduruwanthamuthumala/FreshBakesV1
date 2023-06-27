
import React from "react";
import CartContext from "./Cart-Context";
import { useReducer } from "react";


const defaultCartState = {
    items:[],
    total_amount:0,
}

const  cartReducer = (state,action) => {
    if (action.type == 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const newTotalAmount = state.total_amount + action.item.price * action.item.amount;
        return {
            items:updatedItems,
            total_amount:newTotalAmount,
        }
    }
    if (action.type == 'EDIT'){
        const filteredItems = state.items.map((item) => {
            if (item.id === action.item.id) {
              return {
                ...item, // Copy all existing properties of the item
                amount: action.item.amount, // Update the 'amount' property
              };
            }
            
            return item; // Return the original item if no modification is needed
          });
        const updatedItems = filteredItems;
        const newTotalAmount = state.total_amount + action.item.price * action.item.amount;
        return {
            items:updatedItems,
            total_amount:newTotalAmount,
        }
    }
    return defaultCartState;
}
const CardProvider = (props) => {

    const  [CartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState)
    const addItemToCart = (item) => {
        dispatchCartAction({
            type:'ADD',
            item:item,
        });
    }

    const removeItemFromCart = (id) => {
        dispatchCartAction({
            type:'REMOVE',
            id:id,
        });
    }

    const editItemFromCart = (item) => {
        dispatchCartAction({
            type:'EDIT',
            item:item,

        });
    }
    const cartContext = {
        items:CartState.items,
        total_amount:CartState.total_amount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
        editItemFromCart:editItemFromCart,
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CardProvider;