import React, { useState, useReducer } from "react";
import '../styles/cart/cart.css'

const reducer = (state, recieved) => {
    let currentCost = state.price * state.quantity;
    let increment = state.quantity;
    let stock = state.stock;
    const constant = state.quantities;
    let currentCost_dec = state.cost;
    switch (recieved){
        case 'increment':
            return {
                ...state,
                quantity: (increment < constant) ? (increment + 1): (increment),
                stock: (stock >= 1) ? (stock - 1) : (stock = 0),
                cost: (increment < constant) ? (currentCost + state.price): (currentCost),
            }
        case 'decrement':
            return {
                ...state,
                quantity: (increment >= 1) ? (increment - 1) : (increment),
                stock: (stock < constant) ? (stock + 1): (stock = constant),
                cost: (increment <= constant && stock !== constant) ? (currentCost_dec - state.price):
                      (currentCost_dec),
            }
        default:
            return state;
    }
}

const Cart = (props) => {
    let name  = props.product;
    const initValues = {
        quantity: 0, cost: 0, 
        price: props.price, product: props.product,
        stock: props.stock, quantities: props.quantities 
    };
    const [value, push] = useReducer(reducer, initValues);
    
    const cartReducer = (state, action) => {
        switch (action) {
            case 'increment':
                return {[name]:{
                    quantity: value.quantity,
                    total_cost: value.cost
                },
                id: name};
            case 'decrement':
                return {[name]:{
                    quantity: value.quantity,
                    total_cost: value.cost
                },
                id: name};
        }
    }
    const [cart, cartPush] = useReducer(cartReducer, {});
    const handleIncrement = (e) => {
        e.preventDefault();
        push('increment');
        cartPush('increment');
        props.dataFromCart(cart)
    };
    const handleDecrement = (e) => {
        e.preventDefault();
        push('decrement');
        cartPush('decrement');
        props.dataFromCart(cart)
    };
    return(
        <div id='cart'>
            <div id="upperCart">
                <p id="cartProduct">{value.product}</p>
                <div id="upper-right-cart">
                    <button id='increase' onClick={handleIncrement}>+</button>
                    <p id="quantity">{value.quantity}</p>
                    <button id='decrease' onClick={handleDecrement}>-</button>
                </div>
            </div>
            <div id="lowerCart">
                <p id="inStock">In Stock: {value.stock}</p>
                <p id="cost">Total cost:  GHS {value.cost}</p>
            </div>
            <hr id='line' width= '90%' color="black"/>
        </div>
    )
}
export default Cart;