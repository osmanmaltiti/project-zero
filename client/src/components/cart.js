import React from "react";
import '../styles/cart/cart.css'


const Cart = (props) => {
    return(
        <div id='cart'>
            <div id="upperCart">
                <p id="cartProduct">{props.product} ({props.type})</p>
                <button id="remove-item" onClick={props.delete}>Remove</button>
            </div>
            <div id="lowerCart">
                <p id="inStock">In Stock: {props.stock}</p>
                <p id="cost">Unit Price:  GHS {props.price}</p>
            </div>
            <hr id='line' width= '90%' color="black"/>
        </div>
    )
}
export default Cart;