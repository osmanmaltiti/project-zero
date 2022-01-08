import React from 'react';
import './homepage.css';
import { useNavigate } from 'react-router-dom';
import auth from '../services/Auth';
import Popup from 'reactjs-popup';

export const Home = () => {
    const navigate = useNavigate();
    const signOut = () => {
        auth.signOut(() => {
            navigate('/')
        })
    }
    return(
        <div id= 'home'>
            <div id='texts'>
            <h1 id="h-comName">ZOZYS ENTERPRISE</h1>
            <p id="foot">Contact Us: +233-00-000-0000</p>
            </div>
            <div id='opaqueBack'> 
                <div id='h-button'>
                    <Popup trigger={<button className="h-button" id="h0">Cart</button>} position={'bottom center'}>
                        <div id='cart-div'>It works</div>
                    </Popup>
                    <button className="h-button" id="h1">Help</button>
                    <button className="h-button" id="h2">Pricing</button>
                    <button className="h-button" id="h3" onClick={signOut}>Log Out</button>
                    </div>
                <div id="c-buttons">
                    <div id='static-frame'><button id="c-b0" className="c-buttons" onClick={()=>navigate('/homepage/wood')}><p className='button-text'>Wood</p></button></div>
                    <div id='static-frame'><button id="c-b1" className="c-buttons" onClick={()=>navigate('/homepage/furniture')}><p className='button-text'>Doors/Furniture</p></button></div>
                    <div id='static-frame'><button id="c-b2" className="c-buttons" onClick={()=>navigate('/admin')}><p className='button-text'>Custom</p></button></div>
                </div>
            </div>
        </div>
            
        )
}