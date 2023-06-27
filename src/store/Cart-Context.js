import React from "react";

const CartContext = React.createContext({
    items:[],
    total_amount:0,
    addItem: () => {},
    removeItem: ()=> {},

});

export default CartContext;