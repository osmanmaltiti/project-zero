import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useWood } from '../Custom-hooks/useController';
import { useApiCall } from '../APIs/API-get';
import { IoIosCart } from 'react-icons/io';


export const Wood = () => {
    const { getAllData } = useApiCall();
    const navigate = useNavigate();
    
    useEffect(() => {
        getAllData();
    // eslint-disable-next-line
    }, []);
    
    return(
        <div className='flex flex-col h-screen w-screen items-center justify-center gap-2 bg-gray-200 
        md:grid md:grid-cols-3 md:place-items-center'>
            <button onClick={()=> navigate('/homepage/wood/beam')} 
                    className='bg-black text-white font-condensed text-lg border-2 border-black h-1/6 w-10/12 shadow rounded
                    hover:scale-105 transition-all hover:bg-white hover:text-black
                    md:h-1/3 xl:w-1/2 xl:justify-self-end'>Beam</button>
            <button onClick={()=> navigate('/homepage/wood/board')} 
                    className='bg-black text-white font-condensed text-lg border-2 border-black h-1/6 w-10/12 shadow rounded
                    hover:scale-105 transition-all hover:bg-white hover:text-black
                    md:h-1/3 xl:w-1/2'>Board</button>
            <button onClick={()=> navigate('/homepage/wood/pole')} 
                    className='bg-black text-white font-condensed text-lg border-2 border-black h-1/6 w-10/12 shadow rounded
                    hover:scale-105 transition-all hover:bg-white hover:text-black
                    md:h-1/3 xl:w-1/2 xl:justify-self-start'>Pole</button>
        </div>
    ) 
}

export const Beam = () => {
    const navigate = useNavigate();
    const woodData = useSelector(state => state.woodFurniture.wood);
    const cartlength = useSelector(state => state.checkout.cartLength);
    const [panelData, setPanelData] = useState([]);
    
    const { getAllData } = useApiCall();
    
    useEffect(() => {
        getAllData();
    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setPanelData(woodData?.filter(item => item.type === 'Beam'));
    }, [woodData]);

    const { mapWood } = useWood();
    return(
        <div className='h-screen flex flex-col gap-2'>
           <div className='bg-white flex flex-row justify-between p-3 shadow-md'>
                <p className='font-right text-3xl'>Beam</p>
                <button className='relative w-12' onClick={() => navigate('/homepage/checkout')}>
                   <IoIosCart className='text-3xl mt-1'/>
                   <p className='absolute top-0 right-0 w-5 h-5 bg-black text-white rounded-full font-right flex flex-col justify-center'>{ cartlength }</p>
                </button>
           </div>
           <div className='overflow-y-auto scrollbar-thin scrollbar-thumb-black w-screen flex flex-col items-center py-2 gap-4'>
                { mapWood(panelData) }
           </div>
        </div>
    ) 
}

export const Board = () => {
    const navigate = useNavigate();
    const woodData = useSelector(state => state.woodFurniture.wood);
    const cartlength = useSelector(state => state.checkout.cartLength);
    const [panelData, setPanelData] = useState([]);
    
    const { getAllData } = useApiCall();

    useEffect(() => {
        getAllData();
    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setPanelData(woodData?.filter(item => item.type === 'Board'));
    }, [woodData]);
    
    const { mapWood } = useWood();
    return(
        <div className='h-screen flex flex-col gap-2'>
           <div className='bg-white flex flex-row justify-between p-3 shadow-md'>
                <p className='font-right text-3xl'>Board</p>
                <button className='relative w-12' onClick={() => navigate('/homepage/checkout')}>
                   <IoIosCart className='text-3xl mt-1'/>
                   <p className='absolute top-0 right-0 w-5 h-5 bg-black text-white rounded-full font-right flex flex-col justify-center'>{ cartlength }</p>
                </button>
           </div>
           <div className='overflow-y-auto scrollbar-thin scrollbar-thumb-black w-screen flex flex-col items-center py-2 gap-4'>
                { mapWood(panelData) }
           </div>
        </div>
    ) 
}

export const Pole = () => {
    const navigate = useNavigate();
    const woodData = useSelector(state => state.woodFurniture.wood);
    const cartlength = useSelector(state => state.checkout.cartLength);
    const [panelData, setPanelData] = useState([]);

    const { getAllData } = useApiCall();
    
    useEffect(() => {
        getAllData();
    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setPanelData(woodData?.filter(item => item.type === 'Pole'));
    }, [woodData]);

    const { mapWood } = useWood();
    return(
        <div className='h-screen flex flex-col gap-2'>
           <div className='bg-white flex flex-row justify-between p-3 shadow-md'>
                <p className='font-right text-3xl'>Pole</p>
                <button className='relative w-12' onClick={() => navigate('/homepage/checkout')}>
                   <IoIosCart className='text-3xl mt-1'/>
                   <p className='absolute top-0 right-0 w-5 h-5 bg-black text-white rounded-full font-right flex flex-col justify-center'>{ cartlength }</p>
                </button>
           </div>
           <div className='overflow-y-auto scrollbar-thin scrollbar-thumb-black w-screen flex flex-col items-center py-2 gap-4'>
                { mapWood(panelData) }
           </div>
        </div>
    ) 
}