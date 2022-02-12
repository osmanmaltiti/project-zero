import React from 'react';
import '../Styles/checkout/checkout.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeWoodItem, removeFurnitureItem, increaseQuantity, decreaseQuantity} from '../Redux/features/checkout-slice';


const CheckoutPage = () => {
  const woodItems = useSelector(state => state.checkout.woodCart);
  const furnitureItems = useSelector(state => state.checkout.furnitureCart);
  const dispatch = useDispatch();

  return <div id='main-checkout'>
    <div id='header'>
        <h1>Checkout</h1>
        <button id='purchase'>Confirm Purchases</button>
    </div>
    <div id='item-layout'>
        <div id ='layout-header'>
            <hr className='separator' color='black'/>
            <div id='table-head'>
                <p>Stock</p>
                <p>Product</p>
                <p>Quantity</p>
                <p>Price</p>
            </div>
            <hr className='separator' color='black'/>
        </div>
        <div id='layout-items'>
            <div className='layout'>
                <center style={{fontStyle: 'italic', fontWeight: 'light'}}>Wood</center>
                {
                    woodItems?.map(item => <CheckoutCard
                            key = {item.id}
                            stock = {item.stock}
                            product = {item.name}
                            type = {item.type}
                            removeItem = { () => {
                                dispatch(removeWoodItem(item.id))
                                }
                            }
                            increment = { () => dispatch(
                                increaseQuantity({
                                    id: item.id, 
                                    type: 'wood'
                                })) 
                            }
                            decrement = { () => dispatch(
                                decreaseQuantity({
                                    id: item.id, 
                                    type: 'wood'
                                })) 
                            }
                            quantity = { item.quantity }
                            amount = { item.amount }
                            />)
                }
                <hr color='black' width='90%'/>
                <center style={{fontStyle: 'italic', fontWeight: 'light'}}>Furniture</center>
                {
                    furnitureItems?.map(item => <CheckoutCard
                                key = {item.id}
                                stock = {item.stock}
                                product = {item.name}
                                type = {item.type}
                                removeItem = { () => {
                                    dispatch(removeFurnitureItem(item.id))
                                }}
                                increment = { () => dispatch(
                                    increaseQuantity({
                                        id: item.id, 
                                        type: 'furniture'
                                    })) 
                                }
                                decrement = { () => dispatch(
                                    decreaseQuantity({
                                        id: item.id, 
                                        type: 'furniture'
                                    })) 
                                }
                                quantity = { item.quantity }
                                amount = { item.amount }
                                />)
                }
            </div>
        </div>
    </div>
  </div>;
};

const CheckoutCard = (props) => {
    return <div id="checkout-card">
        <img id='imageUrl' alt='' src='#'/>
        <div id='items'>
            <span><p>{props.stock}</p></span>
            <span><p>{props.product} ({props.type})</p></span>
            <span>
                <div id='quantity-items'>
                    <button onClick={ props.increment }>+</button>
                    <h4>{props.quantity}</h4>
                    <button onClick={ props.decrement }>-</button>
                </div>
            </span>
            <span><p>GHS {props.amount}</p></span>
        </div>
        <button onClick={props.removeItem}>Remove</button>
    </div>
}
export default CheckoutPage;
