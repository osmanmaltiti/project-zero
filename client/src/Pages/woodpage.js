import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useWood } from '../Custom-hooks/useController';
import '../Styles/wood-furniture/wood-furniture.css'
import { useApiCall } from '../APIs/API-calls';


export const Wood = () => {
    const { getAllData } = useApiCall();
    const navigate = useNavigate();
    
    useEffect(() => {
        getAllData();
    }, []);
    
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
    const navigate = useNavigate();
    const woodData = useSelector(state => state.woodFurniture.wood);
    const [panelData, setPanelData] = useState([]);
    
    const { getAllData } = useApiCall();
    
    useEffect(() => {
        getAllData();
    }, []);

    useEffect(() => {
        setPanelData(woodData?.filter(item => item.type === 'Beam'));
    }, [woodData]);

    const { mapWood } = useWood();
    return(
        <div id='subWood'>
           <div id='wood-header'>
               <p className='product-header'>Beam</p>
               <button id='cart-button' onClick={() => navigate('/homepage/checkout')}>Cart</button>
           </div>
           <div id='wood-tile'>
                { mapWood(panelData) }
           </div>
        </div>
    ) 
}

export const Board = () => {
    const navigate = useNavigate();
    const woodData = useSelector(state => state.woodFurniture.wood);
    const [panelData, setPanelData] = useState([]);
    
    const { getAllData } = useApiCall();

    useEffect(() => {
        getAllData();
    }, []);

    useEffect(() => {
        setPanelData(woodData?.filter(item => item.type === 'Board'));
    }, [woodData]);
    
    const { mapWood } = useWood();
    return(
        <div id='subWood'>
           <div id='wood-header'>
                <p className='product-header'>Board</p>
                <button id='cart-button' onClick={() => navigate('/homepage/checkout')}>Cart</button>
           </div>
           <div id='wood-tile'>
                { mapWood(panelData) }
           </div>
        </div>
    ) 
}

export const Pole = () => {
    const navigate = useNavigate();
    const woodData = useSelector(state => state.woodFurniture.wood);
    const [panelData, setPanelData] = useState([]);

    const { getAllData } = useApiCall();
    
    useEffect(() => {
        getAllData();
    }, []);

    useEffect(() => {
        setPanelData(woodData?.filter(item => item.type === 'Pole'));
    }, [woodData]);

    const { mapWood } = useWood();
    return(
        <div id='subWood'>
           <div id='wood-header'>
                <p className='product-header'>Pole</p>
                <button id='cart-button' onClick={() => navigate('/homepage/checkout')}>Cart</button>
           </div>
           <div id='wood-tile'>
                { mapWood(panelData) }
           </div>
        </div>
    ) 
}