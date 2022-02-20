import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../Redux/features/sign-slice';
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { FaMoneyCheckAlt, FaPhoneAlt, FaCartArrowDown } from 'react-icons/fa'
import '../Styles/HomePage.css';

export const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const openMenu = () => {
        let menu = open ? 'flex absolute top-16 mt-1 right-0 flex-col bg-slate-400 pt-0 pb-4 px-4 items-start gap-2 z-10 rounded-bl-sm'
                    : 'hidden';
        let icon = open ? <IoMdClose className='text-2xl align-middle'/>
                    : <IoMdMenu className='text-2xl align-middle'/>
        return { menu, icon }
    }
    const { menu, icon } = openMenu();

    const LogOut = () => {
        dispatch(
            signOut({
                navigate: () => navigate('/')
            })
        );
    }
    return(
        <div id='home' className='h-screen w-screen flex flex-col justify-between'>
            <div id='menu' className='flex flex-row justify-between bg-slate-400 p-4 relative items-center'>
                <h1 className='font-right text-3xl'>ZOZYS ENTERPRISE</h1>
                <button onClick={() => setOpen(!open)}>{ icon }</button>
                <div id='menu' className= { menu }>
                    <button className='text-lg font-roboto flex flex-row font-semibold gap-2 items-center w-72 place-content-center' onClick={() => navigate('/homepage/checkout')}><FaCartArrowDown/>Checkout</button>
                    <button className='text-lg font-roboto font-semibold flex flex-row gap-2 items-center w-72 place-content-center' onClick={() => navigate('/homepage')}><FaMoneyCheckAlt/>Pricing</button>
                    <button className='text-lg font-roboto font-semibold flex flex-row gap-2 items-center w-72 place-content-center' onClick={() => navigate('/homepage')}><FaPhoneAlt/>Contact</button>
                    <button className='w-full shadow-lg bg-red-500 px-4 rounded text-lg font-roboto font-semibold' onClick={LogOut}>Log Out</button>
                </div>
            </div>
            <div className='w-full grid py-8 place-items-center flex-grow backdrop-blur-sm'>
                <div className='overflow-hidden w-4/5 h-3/5 rounded-md shadow-xl border-y border-solid border-gray-600 border-x'>
                    <button id='wood-page-link' className="main-button grid w-full h-full place-items-center hover:scale-105 transition-transform duration-500" onClick={() => navigate('/homepage/wood')}>
                        <p className='font-condensed font-semibold text-lg bg-gray-50 rounded px-2 opacity-60'>Wood</p>
                    </button>
                </div>
                <div className='w-4/5 h-3/5 rounded-md overflow-hidden shadow-xl border-y border-solid border-gray-600 border-x'>
                    <button id='furniture-page-link' className="main-button w-full h-full grid place-items-center hover:scale-105 transition-transform duration-500" onClick={() => navigate('/homepage/furniture')}>
                        <p className='font-condensed font-semibold text-lg bg-gray-50 rounded px-2 opacity-60'>Doors/Furniture</p>
                    </button>
                </div>
                <div className='w-4/5 h-3/5 overflow-hidden rounded-md shadow-xl border-y border-solid border-gray-600 border-x'>
                    <button id='custom-page-link' className="main-button w-full h-full grid place-items-center hover:scale-105 transition-transform duration-500" onClick={() => navigate('/homepage')} >
                        <p className='font-condensed font-semibold text-lg bg-gray-50 rounded px-2 opacity-60'>Custom</p>
                    </button>
                </div>
            </div>
            <p className='w-fit bg-yellow-300 font-semibold shadow p-2 mb-2 ml-2 rounded-md font-roboto '>Contact Us: +233-00-000-0000</p>
        </div>
            
        )
}