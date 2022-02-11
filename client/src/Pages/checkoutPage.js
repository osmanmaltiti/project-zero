import React from 'react';
import '../Styles/checkout/checkout.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeWoodItem, removeFurnitureItem} from '../Redux/features/checkout-slice';


const CheckoutPage = () => {
  const woodItems = useSelector(state => state.checkout.woodCart);
  const furnitureItems = useSelector(state => state.checkout.furnitureCart);
  const dispatch = useDispatch();

  console.log(woodItems)
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
                            stock = {item.quantity}
                            product = {item.name}
                            type = {item.type}
                            removeItem = {() => {
                                dispatch(removeWoodItem(item.id))
                            }}
                            />)
                }
                <hr color='black' width='90%'/>
                <center style={{fontStyle: 'italic', fontWeight: 'light'}}>Furniture</center>
                {
                    furnitureItems?.map(item => <CheckoutCard
                                 key = {item.id}
                                 stock = {item.quantity}
                                 product = {item.name}
                                 type = {item.type}
                                 removeItem = {() => {
                                     dispatch(removeFurnitureItem(item.id))
                                 }}
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
                    <button>+</button>
                    <h4>12</h4>
                    <button>-</button>
                </div>
            </span>
            <span><p>GHS {props.amount}</p></span>
        </div>
        <button onClick={props.removeItem}>Remove</button>
    </div>
}
export default CheckoutPage;
