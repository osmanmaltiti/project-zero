import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFurniture } from '../Custom-hooks/useController';
import '../Styles/wood-furniture/wood-furniture.css'
import { useApiCall } from '../APIs/API-get';



export const Furniture = () => {
    const { getAllData } = useApiCall();
    const navigate = useNavigate();
    
    useEffect(() => {
        getAllData();
    // eslint-disable-next-line
    }, []);
    
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
    const { getAllData } = useApiCall();
    const furnitureData = useSelector(state => state.woodFurniture.furniture);
    const navigate = useNavigate();
    const [panelData, setPanelData] = useState([]);
    
    useEffect(() => {
        getAllData();
    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setPanelData(furnitureData?.filter(item => item.type === 'Single-panel'))
    }, [furnitureData]);

    const { mapFurniture } = useFurniture();
    return(
        <div id='subWood'>
           <div id='wood-header'>
                <p className='product-header'>Single Panel Doors</p>
                <button id='cart-button' onClick={() => navigate('/homepage/checkout')}>Cart</button>
           </div>
           <div id='wood-tile'>
                { mapFurniture(panelData) }
           </div>
        </div>
    ) 
}

export const DoublePanel = () => {
    const {getAllData} = useApiCall();
    const furnitureData = useSelector(state => state.woodFurniture.furniture);
    const navigate = useNavigate();
    const [panelData, setPanelData] = useState([]);
    
    useEffect(() => {
        getAllData();
    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setPanelData(furnitureData?.filter(item => item.type === 'Double-panel'))
    }, [furnitureData]);

    const { mapFurniture } = useFurniture();
    return(
        <div id='subWood'>
           <div id='wood-header'>
                <p className='product-header'>Double Panel Doors</p>
                <button id='cart-button' onClick={() => navigate('/homepage/checkout')}>Cart</button>
           </div>
           <div id='wood-tile'>
                { mapFurniture(panelData) }
           </div>
        </div>
    ) 
}