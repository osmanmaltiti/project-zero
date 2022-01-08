import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Cart from '../cart/cart';
import { Tiles } from '../Tiles/tiles';
import './furniturePage.css';


export const Furniture = () => {
    const navigate = useNavigate();
    return(
        <div id='mainFurniture'>
            <div id='furnitureButtons'>
                <button onClick={()=> navigate('/homepage/furniture/singlepanel')} 
                        className='furnitureButtons'>Single Panel</button>
                <button onClick={()=> navigate('/homepage/furniture/doublepanel')} 
                        className='furnitureButtons'>Double Panel</button>
            </div>
        </div>
    ) 
}
export const SinglePanel = () => {
    const [data, setData] = useState([]);
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        (async() => {
            const res  = await fetch('/api');
            const resData = await res.json();
            setData(resData.dummyData.furniture);
        })()
    }, []);
    function cartArray(array, id){
        return [...new Map(array.map(item => [item[id], item])).values()]
    }
    const filter = cartArray(cartData, 'id');
    return(
        <div id='subFurniture'>
           <div id='furniture-header'>
                <p className='product-header'>Single Panel Doors</p>
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
           <div id='furniture-tile'>
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
            const res  = await fetch('/api');
            const resData = await res.json();
            setData(resData.dummyData.furniture);
        })();
    }, []);
    function cartArray(array, id){
        return [...new Map(array.map(item => [item[id], item])).values()]
    }
    const filter = cartArray(cartData, 'id');
    return(
        <div id='subFurniture'>
           <div id='furniture-header'>
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
           <div id='furniture-tile'>
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