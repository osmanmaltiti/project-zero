import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Cart from './cart';
import { Tiles } from './tiles';
import '../styles/wood-furniture/wood-furniture.css'



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
    const [data, setData] = useState([]);
    

    useEffect(() => {
        (async() => {
            const res  = await fetch('/api/data');
            const resData = await res.json();
            setData(resData.furniture);
        })()
    }, []);
    
    const [cartData, setCartData] = useState([]);
    function cartArray(array, id){
        return [...new Map(array.map(item => [item[id], item])).values()];
    }; const filter = cartArray(cartData, 'id');

    const [newCartData, setNewCartData] = useState(["dummy"]);
    const dataFromCart = (cartData) => {
        setNewCartData([...newCartData, cartData]);
    }; 
    function newCartArray(array, id){
        return [...new Map(array.map(item => [item[id], item])).values()];
    }; const filterNewCartData = newCartArray(newCartData, 'id');
    console.log(filterNewCartData);

    return(
        <div id='subWood'>
           <div id='wood-header'>
                <p className='product-header'>Single Panel Doors</p>
                <Popup trigger={<button id='cart-button'>Cart</button>} position={'bottom center'}>
                   <div id='cart-div'>
                       {filter.map((item) => <Cart key={item.id}
                                                    product={item.name}
                                                    price={item.price}
                                                    quantities={item.quantity}
                                                    stock={item.quantity}
                                                    dataFromCart = {dataFromCart}/>)}
                   </div>
                </Popup>
           </div>
           <div id='wood-tile'>
                {data.filter(item => item.type === 'Single-panel')
                    .map((item) => <Tiles key={item.id} 
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

export const DoublePanel = () => {
    const [data, setData] = useState([]);
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        (async() => {
            const res  = await fetch('/api/data');
            const resData = await res.json();
            setData(resData.furniture);
        })();
    }, []);
    function cartArray(array, id){
        return [...new Map(array.map(item => [item[id], item])).values()]
    }
    const filter = cartArray(cartData, 'id');
    return(
        <div id='subWood'>
           <div id='wood-header'>
                <p className='product-header'>Double Panel Doors</p>
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
                {data.filter(item => item.type === 'Double-panel')
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