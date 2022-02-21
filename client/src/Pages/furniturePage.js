import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFurniture } from '../Custom-hooks/useController';
import { useApiCall } from '../APIs/API-get';
import { IoIosCart } from 'react-icons/io';




export const Furniture = () => {
    const { getAllData } = useApiCall();
    const navigate = useNavigate();
    
    useEffect(() => {
        getAllData();
    // eslint-disable-next-line
    }, []);
    
    return(
        <div className='flex flex-col h-screen w-screen items-center justify-center gap-2 bg-gray-200
        md:grid md:grid-cols-2 md:place-items-center'>
            <button className='bg-black text-white font-condensed text-lg border-2 border-black h-1/6 w-10/12 shadow rounded
            hover:scale-105 transition-all hover:bg-white hover:text-black
            md:h-1/3 xl:w-1/2 xl:justify-self-end xl:mr-8' onClick={()=> navigate('/homepage/furniture/singlepanel')}>Single Panel</button>
            <button className='bg-black text-white font-condensed text-lg border-2 border-black h-1/6 w-10/12 shadow rounded
            hover:scale-105 transition-all hover:bg-white hover:text-black
            md:h-1/3 xl:w-1/2 xl:justify-self-start xl:ml-8' onClick={()=> navigate('/homepage/furniture/doublepanel')}>Double Panel</button>
        </div>
    ) 
}

export const SinglePanel = () => {
    const { getAllData } = useApiCall();
    const furnitureData = useSelector(state => state.woodFurniture.furniture);
    const cartlength = useSelector(state => state.checkout.cartLength);
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
        <div className='h-screen flex flex-col gap-2'>
            <div className='bg-white flex flex-row justify-between p-3 shadow-md'>
                <p className='font-right text-3xl'>Single Panel Doors</p>
                <button className='relative w-12' onClick={() => navigate('/homepage/checkout')}>
                   <IoIosCart className='text-3xl mt-1'/>
                   <p className='absolute top-0 right-0 w-5 h-5 bg-black text-white rounded-full font-right flex flex-col justify-center'>{ cartlength }</p>
                </button>
           </div>
           <div className='overflow-y-auto scrollbar-thin scrollbar-thumb-black w-screen flex flex-col items-center py-2 gap-4'>
                { mapFurniture(panelData) }
           </div>
        </div>
    ) 
}

export const DoublePanel = () => {
    const {getAllData} = useApiCall();
    const furnitureData = useSelector(state => state.woodFurniture.furniture);
    const cartlength = useSelector(state => state.checkout.cartLength);
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
        <div className='h-screen flex flex-col gap-2'>
            <div className='bg-white flex flex-row justify-between p-3 shadow-md'>
                <p className='font-right text-3xl'>Double Panel Doors</p>
                <button className='relative w-12' onClick={() => navigate('/homepage/checkout')}>
                   <IoIosCart className='text-3xl mt-1'/>
                   <p className='absolute top-0 right-0 w-5 h-5 bg-black text-white rounded-full font-right flex flex-col justify-center'>{ cartlength }</p>
                </button>
           </div>
           <div className='overflow-y-auto scrollbar-thin scrollbar-thumb-black w-screen flex flex-col items-center py-2 gap-4'>
                { mapFurniture(panelData) }
           </div>
        </div>
    ) 
}