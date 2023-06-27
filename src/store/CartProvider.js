
import React from "react";
import CartContext from "./Cart-Context";

const CardProvider = (props) => {

    const addItemToCart = () => {

    }

    const removeItemFromCart = () => {

    }
    const cartContext = {
        items:[],
        total_amount:0,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CardProvider;