import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useWood } from './custom-hooks/controller-hook';
import Popup from 'reactjs-popup';
import '../styles/wood-furniture/wood-furniture.css'
import { useApiCall } from '../redux/APIs/API-calls';


export const Wood = () => {
    useApiCall();
    const navigate = useNavigate();
    return(
        <div id='mainWood'>
            <div id='woodButtons'>
                <button onClick={()=> navigate('/homepage/wood/beam')} 
                        className='woodButtons'>Beam</button>
                <button onClick={()=> navigate('/homepage/wood/board')} 
                        className='woodButtons'>Board</button>
                <button onClick={()=> navigate('/homepage/wood/pole')} 
                        className='woodButtons'>Pole</button>
            </div>
        </div>
    ) 
}

export const Beam = () => {
    useApiCall();
    const Cart = useSelector(state => state.wood.woodCart);
    const woodData = useSelector(state => state.woodFurniture.wood);
    const [panelData, setPanelData] = useState([]);
    
    useEffect(() => {
        setPanelData(woodData?.filter(item => item.type === 'Beam'))
    }, [woodData]);

    const { mapWood, mapCartItems, submitCart } = useWood();
    return(
        <div id='subWood'>
           <div id='wood-header'>
               <p className='product-header'>Beam</p>
               <Popup trigger={<button id='cart-button'>Cart</button>} position={'bottom center'}>
                   <div id='cart-div'>
                       { mapCartItems(Cart) }
                       <button className='checkout-button' onClick={ () =>submitCart(Cart) }>
                            Proceed To Checkout
                        </button>
                   </div>
               </Popup>
           </div>
           <div id='wood-tile'>
                { mapWood(panelData) }
           </div>
        </div>
    ) 
}

export const Board = () => {
    useApiCall();
    const Cart = useSelector(state => state.wood.woodCart);
    const woodData = useSelector(state => state.woodFurniture.wood);
    const [panelData, setPanelData] = useState([]);
    
    useEffect(() => {
        setPanelData(woodData?.filter(item => item.type === 'Board'))
    }, [woodData]);
    
    const { mapWood, mapCartItems, submitCart } = useWood();
    return(
        <div id='subWood'>
           <div id='wood-header'>
                <p className='product-header'>Board</p>
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
                { mapWood(panelData) }
           </div>
        </div>
    ) 
}

export const Pole = () => {
    useApiCall();
    const Cart = useSelector(state => state.wood.woodCart);
    const woodData = useSelector(state => state.woodFurniture.wood);
    const [panelData, setPanelData] = useState([]);

    useEffect(() => {
        setPanelData(woodData?.filter(item => item.type === 'Pole'))
    }, [woodData]);

    const { mapWood, mapCartItems, submitCart } = useWood();
    return(
        <div id='subWood'>
           <div id='wood-header'>
                <p className='product-header'>Pole</p>
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
                { mapWood(panelData) }
           </div>
        </div>
    ) 
}