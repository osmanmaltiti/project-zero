import React, { useState } from 'react';
import {SignUp, LogIn} from '../Components/sign';
import '../Styles/LandingPage.css'

export const LandingPage = () => {
const [toggle, setToggle] = useState(false);
const [open, setOpen] = useState(false);

const openSign = () => {
    return open ? 'visible my-4 w-full top-1/4 md:absolute' : 'hidden md:flex md:absolute md:right-8'
}
const handleClick = () => {
    setToggle(!toggle)
}
return(
    <div id='mainIntroPage' className='h-screen w-screen overflow-y-auto flex flex-col relative'>                           
        <div id="upperbody" className='w-full m-0 flex flex-row justify-between items-center p-4
        md:bg-none md:h-2/5 lg:h-1/2 2xl:h-1/2'>
            <h1 className='text-2xl font-right text-black md:text-6xl lg:text-8xl xl:text-9xl md:w-6 md:m-0 md:opacity-80'>ZOZYS ENTERPRISE</h1>
            <button className='bg-black text-white px-4 py-1 rounded font-condensed border-2 
            border-black hover:border-black hover:bg-white hover:text-black md:hidden' 
            onClick={() => setOpen(!open)}>Sign In</button>
        </div>
        <div className='flex-grow flex flex-col-reverse md:grid md:grid-cols-1 w-full md:justify-between'>
            <div id="lowerbody" className='m-auto flex flex-col items-center gap-4 w-3/5 p-8 rounded-md 
            md:w-full md:my-0 md:h-full md:mx-0 md:rounded-none md:place-self-end md:items-start'>
                <h3 className='text-3xl font-bold font-condensed text-black mr-7 xl:text-4xl'>DEALERS IN:</h3>
                <ul id='services' className="list-none text-xl font-bold font-roboto text-black md:text-2xl xl:text-2xl">
                    <li>Wood Processing</li>
                    <li>Wood Selling</li>
                    <li>Furnitures</li>
                    <li>Doors</li>
                    <li>Contracts (Related).</li>
                </ul>
            </div>
            <div className={ openSign() }>
                { toggle ? <SignUp handleClick = {() => handleClick()}/> : 
                <LogIn handleClick = {() => handleClick()}/> }
            </div>
        </div>
        <div id='footer' className='flex flex-row justify-between w-full px-4 py-4 mt-8 md:mt-0 xl:text-xl'>
            <p className="text-sm font-roboto font-semibold text-black">Contact Us: +233-00-000-0000</p>
            <p className="text-sm font-roboto text-black font-semibold">Locate Us: BEGORO, EASTERN REGION</p>
        </div>         
    </div>
    )
}