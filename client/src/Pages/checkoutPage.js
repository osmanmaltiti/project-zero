import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCheckout } from '../Custom-hooks/useController';
import { IoIosArrowForward, IoIosArrowBack, IoIosTrash } from 'react-icons/io';
import '../Styles/checkout/checkout.css';

const CheckoutPage = () => {
  const woodItems = useSelector(state => state.checkout.woodCart);
  const furnitureItems = useSelector(state => state.checkout.furnitureCart);
  const { mapWood, mapFurniture } = useCheckout();
  const [ wood, setWood ] = useState([]);
  const [ furniture, setFurniture ] = useState([]);
  
  useEffect(() => {
      woodItems && setWood( [...woodItems] );
      furnitureItems && setFurniture( [...furnitureItems] );
  }, [ woodItems, furnitureItems ]);

  return <div id='main-checkout'>
    <div id='header'>
        <h1>Checkout</h1>
        <button id='purchase'>Confirm Purchases</button>
    </div>
    <div id='item-layout'>
        <div id ='layout-header'>
            <div id='table-head'>
                <p>Stock</p>
                <p>Product</p>
                <p>Quantity</p>
                <p>Price</p>
            </div>
        </div>
        <div id='layout-items'>
            <div className='layout'>
                <center style={ {fontStyle: 'italic', fontWeight: 'light'} }>Wood</center>
                { mapWood(wood) }
                <hr color='black' width='90%'/>
                <center style={ {fontStyle: 'italic', fontWeight: 'light'} }>Furniture</center>
                { mapFurniture(furniture) }
            </div>
        </div>
    </div>
  </div>;
};

export const CheckoutCard = (props) => {
    const bindIcons = {
        size: '30px',
        style: {
            color: 'black',
            verticalAlign: 'middle',
        }
    }
    return <div id="checkout-card">
        <div id='items'>
            <span><p>{ props.stock }</p></span>
            <span><p>{ props.product } ({ props.type })</p></span>
            <span>
                <div id='quantity-items'>
                    <button onClick={ props.decrement }>
                        <IoIosArrowBack { ...bindIcons }/>
                    </button>
                        <h4>{ props.quantity }</h4>
                    <button onClick={ props.increment }>
                        <IoIosArrowForward { ...bindIcons }/>
                    </button>
                </div>
            </span>
            <span><p>GHS { props.amount }</p></span>
        </div>
        <button className='remove-item' onClick={ props.removeItem }>
            <IoIosTrash { ...bindIcons }/>
        </button>
    </div>
}
export default CheckoutPage;
