import React, { useState } from 'react';
import {SignUp, LogIn} from '../sign/sign';
import './introPage.css';

export const IntroPage = () => {
const [toggle, setToggle] = useState(true);
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
            {toggle === true ? <LogIn handleClick = {handleClick}/> : 
                                <SignUp handleClick = {handleClick}/> }
        <div id="footer">
            <p id="ft0">Contact Us: +233-00-000-0000</p>
            <p id="ft1">Locate Us: BEGORO, EASTERN REGION</p>
        </div>         
    </div>
    )
}