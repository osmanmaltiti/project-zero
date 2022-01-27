import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Popup from 'reactjs-popup';
import '../styles/wood-furniture/wood-furniture.css'
import { addBeam, addBoard, addPole } from '../redux/features/wood-slice';
import { useWood } from './custom-hooks/controller-hook';


export const Wood = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        (async() => {
            const beam = axios.get('/api/beam');
            const board = axios.get('/api/board');
            const pole = axios.get('/api/pole');
            const res = await axios.all([beam, board, pole]);
            const [Beam, Board, Pole] = res;
            dispatch(addBeam(Beam.data));
            dispatch(addBoard(Board.data));
            dispatch(addPole(Pole.data))
            
        })();
    }, [dispatch]);
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
    const PanelData = useSelector(state => state.wood.beam);
    const Cart = useSelector(state => state.wood.woodCart);
    const { mapWood, mapCartItems } = useWood();
    return(
        <div id='subWood'>
           <div id='wood-header'>
               <p className='product-header'>Beam</p>
               <Popup trigger={<button id='cart-button'>Cart</button>} position={'bottom center'}>
                   <div id='cart-div'>
                       { mapCartItems(Cart) }
                   </div>
               </Popup>
           </div>
           <div id='wood-tile'>
                { mapWood(PanelData) }
           </div>
        </div>
    ) 
}

export const Board = () => {
    const panelData = useSelector(state => state.wood.board);
    const Cart = useSelector(state => state.wood.woodCart);

    const { mapWood, mapCartItems } = useWood();
    return(
        <div id='subWood'>
           <div id='wood-header'>
                <p className='product-header'>Board</p>
                <Popup trigger={<button id='cart-button'>Cart</button>} position={'bottom center'}>
                   <div id='cart-div'>
                        { mapCartItems(Cart) }
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
    const panelData = useSelector(state => state.wood.pole);
    const Cart = useSelector(state => state.wood.woodCart);

    const { mapWood, mapCartItems } = useWood();
    return(
        <div id='subWood'>
           <div id='wood-header'>
                <p className='product-header'>Pole</p>
                <Popup trigger={<button id='cart-button'>Cart</button>} position={'bottom center'}>
                   <div id='cart-div'>
                        { mapCartItems(Cart) }
                   </div>
                </Popup>
           </div>
           <div id='wood-tile'>
                { mapWood(panelData) }
           </div>
        </div>
    ) 
}