import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../Redux/features/sign-slice';
import '../Styles/homepage/home.css';

export const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const LogOut = () => {
        dispatch(
            signOut({
                navigate: () => navigate('/')
            })
        );
    }
    return(
        <div id= 'home'>
            <div id='texts'>
                <h1 id="company-name">ZOZYS ENTERPRISE</h1>
                <p id="foot">Contact Us: +233-00-000-0000</p>
            </div>
            <div id='transparent-background'> 
                <div id='nav-buttons'>
                    <button className="nav-button" onClick={() => navigate('/homepage/checkout')}>Checkout</button>
                    <button className="nav-button">Help</button>
                    <button className="nav-button">Pricing</button>
                    <button className="nav-button" onClick={LogOut}>Log Out</button>
                    </div>
                <div id="main-buttons">
                    <div className='static-frame'>
                        <button id='wood-page-btn' className="main-button" onClick={()=>navigate('/homepage/wood')}>
                            <p className='button-text'>Wood</p>
                        </button>
                    </div>
                    <div className='static-frame'>
                        <button id='furniture-page-btn' className="main-button" onClick={()=>navigate('/homepage/furniture')}>
                            <p className='button-text'>Doors/Furniture</p>
                        </button>
                    </div>
                    <div className='static-frame'>
                        <button id='custom-page-btn' className="main-button" >
                            <p className='button-text'>Custom</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
            
        )
}