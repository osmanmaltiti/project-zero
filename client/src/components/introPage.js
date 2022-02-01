import React, { useState } from 'react';
import {SignUp, LogIn} from './sign';
import '../styles/introPage/introPage.css'

export const IntroPage = () => {
const [toggle, setToggle] = useState(false);
const handleClick = () => {
    setToggle(!toggle)
}
return(
    <div id='mainIntroPage'>                           
        <div id="upperbody">
                <h1>ZOZYS <br/>ENTERPRISE</h1>
        </div>
        <div id="lowerbody">
            <h3>DEALERS IN:</h3>
            <ul className="dList">
                <li>Wood Processing</li>
                <li>Wood Selling</li>
                <li>Furnitures</li>
                <li>Doors</li>
                <li>Contracts (Related).</li>
            </ul>
        </div>
            {toggle === false ? <LogIn handleClick = {handleClick}/> : 
                                <SignUp handleClick = {handleClick}/> }
        <div id="footer">
            <p className="footer-text">Contact Us: +233-00-000-0000</p>
            <p className="footer-text">Locate Us: BEGORO, EASTERN REGION</p>
        </div>         
    </div>
    )
}