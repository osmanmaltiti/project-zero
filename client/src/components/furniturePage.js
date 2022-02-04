import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFurniture } from './custom-hooks/controller-hook';
import Popup from 'reactjs-popup';
import '../styles/wood-furniture/wood-furniture.css'
import { useApiCall } from '../redux/APIs/API-calls';



export const Furniture = () => {
    const navigate = useNavigate();
    
    return(
        <div id='mainWood'>
            <div id='woodButtons'>
                <button onClick={()=> navigate('/homepage/furniture/singlepanel')} 
                        className='woodButtons'>Single Panel</button>
                <button onClick={()=> navigate('/homepage/furniture/doublepanel')} 
                        className='woodButtons'>Double Panel</button>
            </div>
        </div>
    ) 
}

export const SinglePanel = () => {
    useApiCall();
    const furnitureData = useSelector(state => state.woodFurniture.furniture);
    const Cart = useSelector(state => state.furniture.furnitureCart);
    const [panelData, setPanelData] = useState([]);

    useEffect(() => {
        setPanelData(furnitureData?.filter(item => item.type === 'Single-panel'))
    }, [furnitureData]);

    const { mapFurniture, mapCartItems, submitCart } = useFurniture();
    return(
        <div id='subWood'>
           <div id='wood-header'>
                <p className='product-header'>Single Panel Doors</p>
                <Popup trigger={<button id='cart-button'>Cart</button>} position={'bottom center'}>
                   <div id='cart-div'>
                        { mapCartItems(Cart) }
                        <button className='checkout-button' onClick={ () => submitCart(Cart) }>
                            Proceed To Checkout
                        </button>
                   </div>
                </Popup>
           </div>
           <div id='wood-tile'>
                { mapFurniture(panelData) }
           </div>
        </div>
    ) 
}

export const DoublePanel = () => {
    useApiCall();
    const furnitureData = useSelector(state => state.woodFurniture.furniture);
    const Cart = useSelector(state => state.furniture.furnitureCart);
    const [panelData, setPanelData] = useState([]);

    useEffect(() => {
        setPanelData(furnitureData?.filter(item => item.type === 'Double-panel'))
    }, [furnitureData]);

    const { mapFurniture, mapCartItems, submitCart } = useFurniture();
    return(
        <div id='subWood'>
           <div id='wood-header'>
                <p className='product-header'>Double Panel Doors</p>
                <Popup trigger={<button id='cart-button'>Cart</button>} position={'bottom center'}>
                   <div id='cart-div'>
                        { mapCartItems(Cart) }
                        <button className='checkout-button' onClick={ () => submitCart(Cart) }>
                            Proceed To Checkout
                        </button>
                   </div>
                </Popup>
           </div>
           <div id='wood-tile'>
                { mapFurniture(panelData) }
           </div>
        </div>
    ) 
}