import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Popup from 'reactjs-popup';
import '../styles/wood-furniture/wood-furniture.css'
import { addDoublePanel, addSinglePanel } from '../redux/features/furniture-slice';
import { useFurniture } from './custom-hooks/controller-hook';



export const Furniture = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        (async() => {
            const singlePanel = axios.get('/api/singlepanel');
            const doublePanel = axios.get('/api/doublepanel');
            const response = await axios.all([singlePanel, doublePanel]);
            const [SinglePanel, DoublePanel] = response;
            dispatch(addSinglePanel(SinglePanel.data));
            dispatch(addDoublePanel(DoublePanel.data));
        })()
    }, [dispatch]);
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
    const panelData = useSelector(state => state.furniture.singlePanel);
    const Cart = useSelector(state => state.furniture.furnitureCart);

    const { mapFurniture, mapCartItems } = useFurniture();
    return(
        <div id='subWood'>
           <div id='wood-header'>
                <p className='product-header'>Single Panel Doors</p>
                <Popup trigger={<button id='cart-button'>Cart</button>} position={'bottom center'}>
                   <div id='cart-div'>
                        { mapCartItems(Cart) }
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
    const panelData = useSelector(state => state.furniture.doublePanel);
    const Cart = useSelector(state => state.furniture.furnitureCart);

    const { mapFurniture, mapCartItems } = useFurniture();
    return(
        <div id='subWood'>
           <div id='wood-header'>
                <p className='product-header'>Double Panel Doors</p>
                <Popup trigger={<button id='cart-button'>Cart</button>} position={'bottom center'}>
                   <div id='cart-div'>
                        { mapCartItems(Cart) }
                   </div>
                </Popup>
           </div>
           <div id='wood-tile'>
                { mapFurniture(panelData) }
           </div>
        </div>
    ) 
}