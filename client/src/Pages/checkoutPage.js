import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCheckout } from '../Custom-hooks/useController';
import { IoIosArrowForward, IoIosArrowBack, IoIosTrash } from 'react-icons/io';
import '../Styles/App.css';

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

  return <div id='main-checkout' className='pl-1 h-screen place-items-center'>
    <div className='flex flex-row items-center justify-between p-4 bg-white shadow-sm h-full w-full md:w-11/12 lg:w-4/5 xl:w-3/5'>
        <h1 className='font-right text-2xl lg:text-4xl xl:text-5xl'>Checkout</h1>
        <button className='bg-black text-white p-2 rounded text-sm hover:scale-105 transition-transform'>Confirm Purchases</button>
    </div>
    <div className='overflow-y-auto h-full w-full scrollbar-thin scrollbar-thumb-black md:w-11/12 lg:w-4/5 xl:w-3/5'>
        <div className='grid grid-cols-4 place-items-center border-2 border-black py-2 sticky top-0 bg-white w-98p'>
            <p>Stock</p>
            <p>Product</p>
            <p>Quantity</p>
            <p>Amount</p>
        </div>
        <div className='flex flex-col gap-2 pb-2'>
            <center className='italic font-sm bg-gradient-to-r from-blue-400 to-cyan-400 mt-1 w-98p'>Wood</center>
            { mapWood(wood) }
            <center className='italic font-sm bg-gradient-to-r from-blue-400 to-cyan-400 w-98p'>Furniture</center>
            { mapFurniture(furniture) }
        </div>
    </div>
  </div>;
};

export const CheckoutCard = (props) => {
    return <div className='flex flex-col items-center w-98p border-2 border-black py-3 gap-2'>
        <div className='grid grid-cols-4 place-items-center w-full'>
            <p>{ props.stock }</p>
            <p>{ props.product } ({ props.type })</p>
            <div className='flex flex-row justify-evenly items-center w-full'>
                <button onClick={ props.decrement }>
                    <IoIosArrowBack className='fill-black align-middle text-2xl'/>
                </button>
                    <h4>{ props.quantity }</h4>
                <button onClick={ props.increment }>
                    <IoIosArrowForward className='fill-black align-middle text-2xl'/>
                </button>
            </div>
            <p>GHS { props.amount }</p>
        </div>
        <button className='self-end mr-8 ' onClick={ props.removeItem }>
            <IoIosTrash className='fill-black align-middle text-2xl hover:fill-red-500'/>
        </button>
    </div>
}
export default CheckoutPage;
