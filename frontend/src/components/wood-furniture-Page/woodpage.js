import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { Tiles } from '../Tiles/tiles';
import Cart from '../cart/cart';
import './woodpage.css';


export const Wood = () => {
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
    const [data, setData] = useState([]);
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        (async() => {
            const res = await fetch('/api/data');
            const resData = await res.json();
            setData(resData.wood);
        })();
    }, []);
    function cartArray(array, id){
        return [...new Map(array.map(item => [item[id], item])).values()]
    }
    const filter = cartArray(cartData, 'id');
    return(
        <div id='subWood'>
           <div id='wood-header'>
               <p className='product-header'>Beam</p>
               <Popup trigger={<button id='cart-button'>Cart</button>} position={'bottom center'}>
                   <div id='cart-div'>
                   {filter.map((item) => <Cart key={item.id}
                                                    product={item.name}
                                                    price={item.price}
                                                    quantities={item.quantity}
                                                    stock={item.quantity}/>)}
                   </div>
               </Popup>
           </div>
           <div id='wood-tile'>
                {data.filter(item => item.type === 'Beam')
                     .map((item, index) => <Tiles key={index} 
                                            productName={item.name} 
                                            unitPrice={item.price}
                                            type={item.type} 
                                            dimensions={item.dimensions}
                                            handleSubmit={() => {
                                                let {name, price, quantity, id} = item;
                                                const cartObj = { name, price, quantity, id };
                                                setCartData([...cartData, cartObj]);
                                            }}/>)}
           </div>
        </div>
    ) 
}
export const Board = () => {
    const [data, setData] = useState([]);
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        (async() => {
            const res = await fetch('/api/data');
            const resData = await res.json();
            setData(resData.wood);
        })();
    }, []);
    function cartArray(array, id){
        return [...new Map(array.map(item => [item[id], item])).values()]
    }
    const filter = cartArray(cartData, 'id');
    return(
        <div id='subWood'>
           <div id='wood-header'>
                <p className='product-header'>Board</p>
                <Popup trigger={<button id='cart-button'>Cart</button>} position={'bottom center'}>
                   <div id='cart-div'>
                   {filter.map((item) => <Cart key={item.id}
                                                    product={item.name}
                                                    price={item.price}
                                                    quantities={item.quantity}
                                                    stock={item.quantity}/>)}
                   </div>
                </Popup>
           </div>
           <div id='wood-tile'>
                {data.filter(item => item.type === 'Board')
                     .map((item, index) => <Tiles key={index} 
                                            productName={item.name} 
                                            unitPrice={item.price}
                                            type={item.type} 
                                            dimensions={item.dimensions}
                                            handleSubmit={() => {
                                                let {name, price, quantity, id} = item;
                                                const cartObj = { name, price, quantity, id };
                                                setCartData([...cartData, cartObj]);
                                            }}/>)}
           </div>
        </div>
    ) 
}
export const Pole = () => {
    const [data, setData] = useState([]);
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        (async() => {
            const res = await fetch('/api/data');
            const resData = await res.json();
            setData(resData.wood);
        })();
    }, []);
    function cartArray(array, id){
        return [...new Map(array.map(item => [item[id], item])).values()]
    }
    const filter = cartArray(cartData, 'id');
    return(
        <div id='subWood'>
           <div id='wood-header'>
                <p className='product-header'>Pole</p>
                <Popup trigger={<button id='cart-button'>Cart</button>} position={'bottom center'}>
                   <div id='cart-div'>
                   {filter.map((item) => <Cart key={item.id}
                                                    product={item.name}
                                                    price={item.price}
                                                    quantities={item.quantity}
                                                    stock={item.quantity}/>)}
                   </div>
                </Popup>
           </div>
           <div id='wood-tile'>
                {data.filter(item => item.type === "Pole")
                     .map((item, index) => <Tiles key={index} 
                                            productName={item.name}
                                            unitPrice={item.price}
                                            type={item.type}
                                            dimensions={item.dimensions}
                                            handleSubmit={() => {
                                                let {name, price, quantity, id} = item;
                                                const cartObj = { name, price, quantity, id };
                                                setCartData([...cartData, cartObj]);
                                            }}/>)}
           </div>
        </div>
    ) 
}