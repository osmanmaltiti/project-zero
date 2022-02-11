import React from 'react';
import { Routes, Route } from "react-router-dom";
import { LandingPage } from './Pages/landing-page';
import { PrivateRoute } from './Components/private-route';
import { Home } from './Pages/homepage';
import { Wood, Beam, Board, Pole } from './Pages/woodpage';
import { Furniture, DoublePanel, SinglePanel } from './Pages/furniturePage';
import './App.css';
import CheckoutPage from './Pages/checkoutPage';

const App = () => {
    return(
        <div>
            <Routes>
                <Route path={'/'} element={<LandingPage/>}/>
                <Route path={'/homepage'} element={<PrivateRoute><Home/></PrivateRoute>}/>
                <Route path={'/homepage/wood'} element={<PrivateRoute><Wood/></PrivateRoute>}/>
                <Route path={'/homepage/checkout'} element={<PrivateRoute><CheckoutPage/></PrivateRoute>}/>
                <Route path={'/homepage/wood/beam'} element={<PrivateRoute><Beam/></PrivateRoute>}/>
                <Route path={'/homepage/wood/board'} element={<PrivateRoute><Board/></PrivateRoute>}/>
                <Route path={'/homepage/wood/pole'} element={<PrivateRoute><Pole/></PrivateRoute>}/>
                <Route path={'/homepage/furniture'} element={<PrivateRoute><Furniture/></PrivateRoute>}/>
                <Route path={'/homepage/furniture/singlepanel'} element={<PrivateRoute><SinglePanel/></PrivateRoute>}/>
                <Route path={'/homepage/furniture/doublepanel'} element={<PrivateRoute><DoublePanel/></PrivateRoute>}/>
            </Routes>
        </div>
    )
}   

export default App;