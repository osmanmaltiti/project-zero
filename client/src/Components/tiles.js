import React from 'react';
import '../Styles/Tiles.css';

export const Tiles = (props) => {
    return(
        <div id='tiles' className='w-11/12 p-2 grid grid-cols-2 bg-white shadow-md rounded-md  relative sm:w-9/12 bg-gradient-to-r from-blue-400 to-cyan-400'>
            <div className='w-full h-full flex flex-col justify-center xl:gap-1'>
                <h3 className='text-2xl font-right md:text-3xl xl:text-4xl'>{props.productName}</h3>
                <p className='text-base font-condensed md:text-lg xl:text-xl 2xl:text-2xl '><strong>Type:</strong> {props.type}</p>
                <p className='text-base font-condensed md:text-lg xl:text-xl 2xl:text-2xl'><strong>Dimensions:</strong> {props.dimensions}</p>
                <p className='text-base font-condensed md:text-lg xl:text-xl 2xl:text-2xl'><strong>Unit Price:</strong> GHS {props.unitPrice}</p>
            </div>
            <div className='w-full h-full flex flex-col'>
                <p className='font-roboto font-bold md:text-xl'>Description</p>
                <p id='desc' className='font-roboto'>Ad nulla minim sit ullamco voluptate veniam esse pariatur. Veniam ullamco eiusmod in nostrud exercitation cillum laborum elit ut elit ut. Dolore est veniam voluptate reprehenderit ea esse enim.</p> 
            </div>
            <div id='addtocart' className='w-full col-span-2 absolute grid place-items-center overflow-hidden bottom-0 h-0 rounded-md'>
                <button className='bg-black rounded font-roboto hover:scale-105 transition-transform py-2 px-4 text-white w-fit' onClick={props.handleSubmit}>Add To Cart</button>
            </div>
        </div>
    )
}
